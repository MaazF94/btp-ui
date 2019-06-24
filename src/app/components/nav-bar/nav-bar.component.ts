import { AuthService } from './../../shared/services/auth/auth.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn: boolean;
  isProfessional: boolean;
  name: string;

  constructor(private login: LoginComponent, private register: RegisterComponent, private authService: AuthService,
              private route: Router) {
    this.loggedIn = this.authService.isLoggedIn();
    this.isProfessional = this.authService.isUserProfessional();
    if (this.loggedIn) {
      this.name = this.authService.getCurrentUser().fullName;
    }
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.loggedIn = this.authService.isLoggedIn();
    this.isProfessional = this.authService.isUserProfessional();
    this.route.navigateByUrl('/home');
  }

  openLoginDialog() {
    this.login.openDialog();
  }

  openRegisterDialog() {
    this.register.openDialog();
  }

}
