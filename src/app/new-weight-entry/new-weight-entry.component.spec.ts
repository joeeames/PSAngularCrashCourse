import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWeightEntryComponent } from './new-weight-entry.component';

describe('NewWeightEntryComponent', () => {
  let component: NewWeightEntryComponent;
  let fixture: ComponentFixture<NewWeightEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWeightEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWeightEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
