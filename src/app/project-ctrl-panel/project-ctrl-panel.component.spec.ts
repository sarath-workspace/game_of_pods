import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCtrlPanelComponent } from './project-ctrl-panel.component';

describe('ProjectCtrlPanelComponent', () => {
  let component: ProjectCtrlPanelComponent;
  let fixture: ComponentFixture<ProjectCtrlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCtrlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCtrlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
