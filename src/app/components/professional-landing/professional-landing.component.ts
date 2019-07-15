import { ProfessionalService } from './../../shared/services/professional/professional.service';
import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/shared/models/professional/professional';

@Component({
  selector: 'app-professional-landing',
  templateUrl: './professional-landing.component.html',
  styleUrls: ['./professional-landing.component.css']
})
export class ProfessionalLandingComponent implements OnInit {

  professionalFromSearch: Professional;

  constructor(private professionalService: ProfessionalService) {
    this.professionalFromSearch = this.professionalService.getProfessionalFromSearch();
   }

  ngOnInit() {
  }

}
