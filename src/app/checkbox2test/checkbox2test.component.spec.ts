import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkbox2testComponent } from './checkbox2test.component';

describe('Checkbox2testComponent', () => {
  let component: Checkbox2testComponent;
  let fixture: ComponentFixture<Checkbox2testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkbox2testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkbox2testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
