import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistpageComponent } from './checklistpage.component';

describe('ChecklistpageComponent', () => {
  let component: ChecklistpageComponent;
  let fixture: ComponentFixture<ChecklistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
