import {Component, Directive, forwardRef, Host, Input, OnInit, ViewEncapsulation} from '@angular/core';
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
      arr: [[]]
    });
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

  onChange = (_: any) => {
  }
  onTouched = () => {
  }

  writeValue(value: any[]): void {
    this.itemsArray = Array.isArray(value) ? value : [value];
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

  @Input()
  value: any = true;

  constructor(private checkBoxArrayDirective: CheckBoxArrayDirective) {
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
