import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message : string

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message
  }

  ngOnInit(): void {
  }

}
