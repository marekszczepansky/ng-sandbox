import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSourceAssetsComponent } from './local-source-assets.component';

describe('LocalSourceAssetsComponent', () => {
  let component: LocalSourceAssetsComponent;
  let fixture: ComponentFixture<LocalSourceAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSourceAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSourceAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
