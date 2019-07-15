import { AuthService } from './../../shared/services/auth/auth.service';
import { ProfessionalService } from './../../shared/services/professional/professional.service';
import { Professional } from 'src/app/shared/models/professional/professional';
import { CategoryProfession } from './../../shared/models/category-profession/category-profession';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryProfessionService } from 'src/app/shared/services/category-profession/category-profession.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user/user';

@Component({
  selector: 'app-pro-stepper',
  templateUrl: './pro-stepper.component.html',
  styleUrls: ['./pro-stepper.component.css']
})
export class ProStepperComponent implements OnInit {

  professionalCategories: CategoryProfession;
  professions: string[];
  careerCategory: string;
  professional: Professional;
  companyName: string;
  jobTitle: string;
  profession: string;
  yrsOfExp: number;
  queueSize: number;
  replyTime: number;
  aboutMe: string;
  jobDescription: string;
  returnMsg: string;
  errorMsg: string;
  user: User;

  constructor(private catProfService: CategoryProfessionService, private professionalService: ProfessionalService,
              private router: Router, private authService: AuthService) {
    this.professions = new Array();
    this.professional = new Professional();
  }

  ngOnInit() {
  }

  createProfessional() {
    this.setProfessional();
    this.professionalService.createProfessional(this.professional).subscribe(message => {
      if (message.response.length !== 0) {
        this.returnMsg = message.response;
      } else {
        this.user = this.authService.getCurrentUser();
        this.user.professional = this.professional;
        this.user.professional.professionalId = message.professionalId;
        this.user.professional.isActive = 1;
        this.authService.logout();
        this.authService.setCurrentUser(this.user);
        this.router.navigateByUrl('/home');
      }
    }, (error: HttpErrorResponse) => {
      this.errorMsg = 'There was an error';
      console.log('Error-->', error);
    });
  }

  setProfessional() {
    this.professional.userId = this.authService.getCurrentUser().userId;
    this.professional.aboutMe = this.aboutMe;
    this.professional.categoryName = this.careerCategory;
    this.professional.companyName = this.companyName;
    this.professional.jobDescription = this.jobDescription;
    this.professional.jobTitle = this.jobTitle;
    this.professional.professionName = this.profession;
    this.professional.queueSize = this.queueSize;
    this.professional.replyTime = this.replyTime;
    this.professional.yearsOfExperience = this.yrsOfExp;
    this.professional.isActive = 1;
    this.professional.fullName = this.authService.getCurrentUser().fullName;
  }

  setProfessionalCategoriesDropdown() {
    this.professionalCategories = this.catProfService.getCategoryProfessionLst();
  }

  filterProfessionDropdown() {
    let filter: CategoryProfession;
    let index = 0;
    this.professions = new Array();
    this.profession = 'undefined';
    if (this.careerCategory === 'undefined') {
      return;
    }
    for (const key in this.professionalCategories) {
      if (this.professionalCategories[key].categoryName === this.careerCategory) {
        filter = this.professionalCategories[key];
      }
    }
    filter.professionName.forEach(element => {
      this.professions[index] = element;
      index++;
    });
  }
}
