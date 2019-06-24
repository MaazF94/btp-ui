import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseObj } from '../../models/user-response-obj/user-response-obj';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user/user';

const httpOptions = {
  headers: new HttpHeaders(
    { withCredentials: 'true' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = false;
  url = 'http://localhost:8080/btp/loginUser';
  public isProfessional = false;
  user: User;

  constructor(private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user != null) {
      this.isProfessional = (this.user.professional.professionalId > 0 ? true : false);
    }
  }

  login(userLogin: object): Observable<UserResponseObj> {
    return this.http.post<UserResponseObj>(this.url, userLogin, httpOptions);
  }

  // Set current user in your session after a successful login or after professional created
  setCurrentUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn = true;
    if (user.professional.professionalId > 0) {
      this.isProfessional = true;
    } else {
      this.isProfessional = false;
    }
  }

  // Set professional after user registers as professional
  setProfessional() {
    this.isProfessional = true;
  }

  // Get currently logged in user from session
  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  // Clear the session for current user & log the user out
  logout() {
    localStorage.removeItem('user');
    this.loggedIn = false;
    this.isProfessional = false;
    // ... other code for logout
  }

  // The method to check whether user is logged in or not
  isLoggedIn() {
    return this.loggedIn;
  }

    // The method to check whether user is logged in or not
    isUserProfessional() {
      return this.isProfessional;
    }
}
