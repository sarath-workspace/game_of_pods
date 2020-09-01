import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormDataServiceService {

  constructor(private http : HttpClient) {

  }

  getReportList() : Observable<any> {
    const url = "http://localhost:3000/reports"
    return this.http.get(url)
  }

  getStats() : Observable<any> {
    const url = "http://localhost:3000/stats"
    return this.http.get(url)
  }
}
