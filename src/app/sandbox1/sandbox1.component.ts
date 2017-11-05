import {Component, Directive, Host, Inject, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'ms-sandbox1',
	template: `
      <form [formGroup]="checkboxGroupForm">
          <div class="btn-group" data-toggle="buttons">
              <label class="btn-primary" ngbButtonLabel>
                  <input type="checkbox" formControlName="left" ngbButton [valueUnChecked]="null" valueChecked="value1"> Left (pre-checked)
              </label>
              <label class="btn-primary" ngbButtonLabel>
                  <input type="checkbox" formControlName="middle" ngbButton> Middle
              </label>
              <label class="btn-primary" ngbButtonLabel>
                  <input type="checkbox" formControlName="right" ngbButton> Right
              </label>
          </div>
          <div class="btn-group" data-toggle="buttons" formArrayName="arr">
              <label class="btn-primary" ngbButtonLabel *ngFor="let typp of arr.controls; let i = index">
                  <input type="checkbox" msTest
                  [formControlName]="i" ngbButton [valueUnChecked]="null" valueChecked="{{typesArray[i]}}"> {{typesArray[i]}}
              </label>
          </div>
      </form>
      <hr>
      <pre>{{checkboxGroupForm.value | json}}</pre>
	`,
	styles: []
})

// class SolidFormArray extends FormArray {
// 	private _value: any;
// 	constructor(formArray: FormArray) {
// 		super(formArray.controls, formArray.validator, formArray.asyncValidator);
// 	}

// 	get value(): any { return this._value; }
// 	set value(v: any) {this._value = v; }
// }

export class Sandbox1Component implements OnInit {

	public checkboxGroupForm: FormGroup;
	typesArray = ['left', 'middle', 'right'];
	// arr: FormArray = new SolidFormArray(this.formBuilder.array(this.typesArray));
	arr: FormArray = this.formBuilder.array(this.typesArray);

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.checkboxGroupForm = this.formBuilder.group({
			left: true,
			middle: false,
			right: false,
			arr: this.arr
		});
	}
}

@Directive({
	selector: '[msTest]'
})
export class TestDirective implements OnInit {
	constructor(
		@Optional() @Host() @SkipSelf() private parent: FormControl,
		@Optional() @Self() private self: FormControl,
		@Optional() @Self() @Inject(NG_VALUE_ACCESSOR) private va: any,
		// @Optional() @Self() @Inject(NG_VALIDATORS) private validators: any[],
		// @Optional() @Self() @Inject(NG_ASYNC_VALIDATORS) private asyncValidators: any[]
	) {
	}
	ngOnInit(): void {
		console.log('parent', this.parent);
		console.log('self', this.self);
		console.log('VA', this.va);
	}
}
