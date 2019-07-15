import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-received-advice',
  templateUrl: './received-advice.component.html',
  styleUrls: ['./received-advice.component.css']
})
export class ReceivedAdviceComponent implements OnInit {

  Arr = Array; //Array type captured in a variable
  num = 3;

  constructor() { }

  ngOnInit() {
  }

}
