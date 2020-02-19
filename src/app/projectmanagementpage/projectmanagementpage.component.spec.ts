import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagementpageComponent } from './projectmanagementpage.component';

describe('ProjectmanagementpageComponent', () => {
  let component: ProjectmanagementpageComponent;
  let fixture: ComponentFixture<ProjectmanagementpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagementpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagementpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
