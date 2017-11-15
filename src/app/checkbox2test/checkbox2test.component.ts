import {Component, Directive, forwardRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ms-checkbox2test',
  templateUrl: './checkbox2test.component.html',
  styleUrls: ['./checkbox2test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Checkbox2testComponent implements OnInit {

  public checkboxGroupForm: FormGroup;
  objArray = [
    {id: 1, name: 'left'},
    {id: 2, name: 'middle'},
    {id: 3, name: 'right'}
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      arr: [[this.objArray[1]]]
    });
  }

  setRight() {
    this.checkboxGroupForm.get('arr').setValue([this.objArray[2]]);
  }
}

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const MULTI_CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckBoxArrayDirective),
  multi: true
};

@Directive({
  selector: '[msCheckBoxArray]',
  providers: [MULTI_CHECKBOX_VALUE_ACCESSOR]
})
export class CheckBoxArrayDirective implements ControlValueAccessor {
  private itemsArray: any = [];
  private checkboxsArray: CheckBoxArrayItemDirective[] = [];
  // private compareWith = (a, b) => a === b;
  private compareWith = (a, b) => {
    console.log('a,b ', a, b, a === b);
    return a === b;
  };

  @Input()
  set setCompareWith(compareFunction) {
    if (typeof compareFunction === 'function') {
      this.compareWith = compareFunction;
    }
  }

  onChange = (_: any) => {
  };

  onTouched = () => {
  };

  writeValue(inputValue: any[]): void {
    this.itemsArray = Array.isArray(inputValue) ? inputValue : [];
    this.checkboxsArray.forEach(checkbox => {
      checkbox.checked = this.itemsArray.some(value => this.compareWith(value, checkbox.value));
      console.log('checked', checkbox);
    });
  }

  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  include(item: any): any {
    if (!this.itemsArray.includes(item)) {
      this.itemsArray.push(item);
      this.onChange(this.itemsArray);
      this.onTouched();
    }
  }

  exclude(item: any): any {
    if (this.itemsArray.includes(item)) {
      this.itemsArray.splice(this.itemsArray.indexOf(item), 1);
      this.onChange(this.itemsArray);
      this.onTouched();
    }
  }

  includes(item: any): boolean {
    return this.itemsArray.some((val) => this.compareWith(val, item));
  }

  registerCheckBox(value: CheckBoxArrayItemDirective) {
    this.checkboxsArray.push(value);
  }
}

@Directive({
  selector: 'input[type=checkbox][msCheckBoxArrayItem]',
  host: {
    'autocomplete': 'off',
    '[checked]': 'checked',
    '(change)': 'onInputChange($event)',
    '(blur)': 'onTouched($event)'
  },
})
export class CheckBoxArrayItemDirective {
  checked: boolean;

  value: any = true;

  @Input('value')
  set setValue(val: any) {
    this.value = val;
    this.checked = this.checkBoxArrayDirective.includes(val);
  }

  constructor(private checkBoxArrayDirective: CheckBoxArrayDirective) {
    this.checkBoxArrayDirective.registerCheckBox(this);
  }

  onTouched() {
    this.checkBoxArrayDirective.onTouched();
  }

  onInputChange($event) {
    if ($event.target.checked) {
      this.checkBoxArrayDirective.include(this.value);
    } else {
      this.checkBoxArrayDirective.exclude(this.value);
    }
  }
}
