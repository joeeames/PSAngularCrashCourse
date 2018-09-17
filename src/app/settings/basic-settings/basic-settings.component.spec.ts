import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSettingsComponent } from './basic-settings.component';

describe('BasicSettingsComponent', () => {
  let component: BasicSettingsComponent;
  let fixture: ComponentFixture<BasicSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
