import { Injectable } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {AuthenticateComponent} from "../authenticate/authenticate.component";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import { Observable, of as observableOf } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Authenticate } from "../model/authenticate";
import { Authorised } from "../model/authorised";
import { MessageComponent } from "../message/message.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  public authenticate(callback: (autherised, token) => any) : void {
    this.dialog.open(AuthenticateComponent,   {
      disableClose: true
    }).afterClosed().subscribe((data) => {
      let authenticate : Authorised = this.checkCredential(data)
      callback(authenticate.authorised, authenticate.token)
    })
  }

  private checkCredential(credential : Authenticate) : Authorised {
    return {
      authorised: true,
      token: ""
    }
  }

}
