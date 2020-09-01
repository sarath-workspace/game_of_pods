import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Authenticate} from "../model/authenticate";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  credentials : FormGroup

  authenticate : Authenticate

  constructor() { }

  ngOnInit(): void {

    this.authenticate = {
      user : "",
      passwd : ""
    }

    this.credentials = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.credentials.controls[controlName].hasError(errorName);
  }

}
