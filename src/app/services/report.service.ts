import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReport() : Observable<any> {
    const url = "http://localhost:3000/report"
    return this.http.get(url)
  }

  getOldReport(reportName: string) : Observable<any> {
    const url = "http://localhost:3000/report"
    const args = {"name" : reportName}
    return this.http.get(url, {params : args})
  }

  takeReport(token : string) : Observable<any> {
    const url = "http://localhost:3000/takeReport"
    //const args = {"token" : token}
    //return this.http.post(url, {params : args})
    return this.getReport()
  }

}
