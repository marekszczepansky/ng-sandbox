import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Sandbox1Component} from './sandbox1.component';

describe('Sandbox1Component', () => {
	let component: Sandbox1Component;
	let fixture: ComponentFixture<Sandbox1Component>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Sandbox1Component]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Sandbox1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
