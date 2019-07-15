import { Professional } from 'src/app/shared/models/professional/professional';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessionalResponseObj } from '../../models/professional-response-obj/professional-response-obj';

const httpOptions = {
  headers: new HttpHeaders(
    { withCredentials: 'true' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  url = 'http://localhost:8080/btp/createProfessional';
  public professionalFromSearch: Professional;

  constructor(private http: HttpClient) { }

  createProfessional(professional: Professional): Observable<ProfessionalResponseObj> {
    return this.http.post<ProfessionalResponseObj>(this.url, professional, httpOptions);
  }

  setProfessionalFromSearch(professional: Professional) {
    this.professionalFromSearch = professional;
  }

  getProfessionalFromSearch(): Professional {
    return this.professionalFromSearch;
  }
}
