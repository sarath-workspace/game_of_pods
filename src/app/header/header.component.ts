import { Component, OnInit } from '@angular/core';
import { FormDataServiceService } from "../services/form-data-service.service";

export interface Stats {
  lastReportDate: string;
  nextReportDate: string;
  lastWinner: string;
  lastRunner: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  stats: Stats

  constructor(private formDataService : FormDataServiceService) { }

  ngOnInit(): void {
    this.getStats()
  }

  getStats() {
    this.formDataService.getStats().subscribe((stats) => {
      this.stats = stats
    })
  }

}
