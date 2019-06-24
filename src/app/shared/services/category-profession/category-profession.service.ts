import { CategoryProfession } from './../../models/category-profession/category-profession';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryProfessionService {

  url = 'http://localhost:8080/btp/getProfession';
  categoryProfessionLst: CategoryProfession;

  constructor(private http: HttpClient) { }

  getCategoryProfessions(): Observable<CategoryProfession> {
    return this.http.get<CategoryProfession>(this.url);
  }

  getCategoryProfessionLst(): CategoryProfession {
    return this.categoryProfessionLst;
  }

  setCategoryProfessionLst(catProfLst) {
    this.categoryProfessionLst = catProfLst;
  }
}
