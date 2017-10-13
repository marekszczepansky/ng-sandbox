import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'ms-sandbox1',
	template: `
      <form [formGroup]="checkboxGroupForm">
          <div class="btn-group" data-toggle="buttons">
              <label class="btn-primary" ngbButtonLabel>
                  <input type="checkbox" formControlName="left" ngbButton> Left (pre-checked)
              </label>
              <label class="btn-primary" ngbButtonLabel>
                  <input type="checkbox" formControlName="middle" ngbButton> Middle
              </label>
              <label class="btn-primary" ngbButtonLabel>
                  <input type="checkbox" formControlName="right" ngbButton> Right
              </label>
          </div>
      </form>
      <hr>
      <pre>{{checkboxGroupForm.value | json}}</pre>
	`,
	styles: []
})
export class Sandbox1Component implements OnInit {

	public checkboxGroupForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.checkboxGroupForm = this.formBuilder.group({
			left: true,
			middle: false,
			right: false
		});
	}
}
