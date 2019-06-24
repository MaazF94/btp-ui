import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  rcvAdvBtnClicked = true;
  rqstAdvBtnClicked = false;
  resProgBtnClicked = false;

  constructor() { }

  ngOnInit() {
  }

  rcvAdvClicked() {
    this.rcvAdvBtnClicked = true;
    this.rqstAdvBtnClicked = false;
    this.resProgBtnClicked = false;
  }

  rqstAdvClicked() {
    this.rcvAdvBtnClicked = false;
    this.rqstAdvBtnClicked = true;
    this.resProgBtnClicked = false;
  }

  resProgClicked() {
    this.rcvAdvBtnClicked = false;
    this.rqstAdvBtnClicked = false;
    this.resProgBtnClicked = true;
  }

}
