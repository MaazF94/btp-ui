import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponseObj } from '../../models/user-response-obj/user-response-obj';

const httpOptions = {
  headers: new HttpHeaders(
    { withCredentials: 'true' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/btp/loginUser';

  constructor(private http: HttpClient) { }

  login(userLogin: object): Observable<UserResponseObj> {
    return this.http.post<UserResponseObj>(this.url, userLogin, httpOptions);
  }
}
