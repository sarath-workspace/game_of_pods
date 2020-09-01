import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from "../services/report.service";
import { Project } from "../model/project";
import {ProjectService} from "../services/project.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import { Inject } from '@angular/core';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public projectDetails : FormGroup;

  public dialog : MatDialog;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.dialog = this.data.dialog
    this.projectDetails = new FormGroup({
      teamname: new FormControl('', [Validators.required]),
      nameabbr: new FormControl('', [Validators.required]),
      nameexp: new FormControl('', [Validators.required]),
      projectid: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      token: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.projectDetails.controls[controlName].hasError(errorName);
  }

  public onboardProject = () => {
    if(this.projectDetails.valid) {
      this.createProject(this.projectDetails.value)
    }
  }

  private createProject = (projectDetails) => {
    let date = new Date();
    let projectData : Project = {
      id: null,
      teamname: projectDetails.teamname,
      nameabbr: projectDetails.nameabbr,
      nameexp: projectDetails.nameexp,
      projectid: projectDetails.projectid,
      code: projectDetails.code,
      offrepname: projectDetails.offrepname,
      onrepname: projectDetails.onrepname,
      codesmellgatepass: null,
      bugsgatepass: null,
      coveragegatepass: null,
      token: projectDetails.token,
      onboarddate:  (date.getDate() + (date.getMonth() + 1) + date.getFullYear()).toString(),
      deleteddate: null,
      engineeringBatch : 0,
      bugsBatch : 0,
      coverageBatch : 0,
      devilBatch : 0,
      rating : 0
    }

    this.projectService.onboardProject(projectData).subscribe((data) => {
        this.dialog.closeAll()
    }, (error) => {
      alert("Something went wrong. Contact the Administrator.")
    })

  }


}
