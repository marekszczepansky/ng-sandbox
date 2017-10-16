import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'ms-template-variable',
	templateUrl: './template-variable.component.html',
	styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {

	tablica = ['ala', 'ola', 'ela', 'ula'];

	constructor() {
	}

	ngOnInit() {
	}

	daj(ff) {
		console.log(ff);
		return '1';

	}
}
