import { ProStepperComponent } from './../pro-stepper/pro-stepper.component';
import { CategoryProfessionService } from './../../shared/services/category-profession/category-profession.service';
import { CategoryProfession } from './../../shared/models/category-profession/category-profession';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-profession',
  templateUrl: './category-profession.component.html',
  styleUrls: ['./category-profession.component.css']
})
export class CategoryProfessionComponent implements OnInit {

  professionalCategories: CategoryProfession;

  constructor(private catProfService: CategoryProfessionService, private proStepComponent: ProStepperComponent) { }

  ngOnInit() {
    this.getNavBar();
  }

  getNavBar() {
    this.catProfService.getCategoryProfessions().subscribe(data => {
      this.professionalCategories = data;
      this.catProfService.setCategoryProfessionLst(this.professionalCategories);
      this.proStepComponent.setProfessionalCategoriesDropdown();
      console.log('profCategories -->', this.professionalCategories);
    });
  }
}
