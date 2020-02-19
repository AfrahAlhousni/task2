import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalprojectmanagementpageComponent } from './finalprojectmanagementpage.component';

describe('FinalprojectmanagementpageComponent', () => {
  let component: FinalprojectmanagementpageComponent;
  let fixture: ComponentFixture<FinalprojectmanagementpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalprojectmanagementpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalprojectmanagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
