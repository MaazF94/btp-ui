import { User } from './../../models/user/user';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import {catchError} from 'rxjs/operators/';
import { UserResponseObj } from '../../models/user-response-obj/user-response-obj';

const httpOptions = {
  headers: new HttpHeaders(
    { withCredentials: 'true' })
};

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  url = 'http://localhost:8080/btp/registerUser';

  constructor(private http: HttpClient) { }

  registerUser(userInfo: User): Observable<UserResponseObj> {
    return this.http.post<UserResponseObj>(this.url, userInfo, httpOptions);
  }
}
