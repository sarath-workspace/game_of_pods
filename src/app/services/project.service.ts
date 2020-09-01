import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }

  getProjects() : Observable<any> {
    const url = "http://localhost:3000/projects"
    return this.http.get(url)
  }

  onboardProject(data: any): Observable<any>{
    const url= "http://localhost:3000/projectssss"
    /*, {params : data}*/
    return this.http.get(url)
  }
}

