import { AuthService } from './../../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;
  userLoginDetails: object;
  returnMsg = '';
  errorMsg = '';
  constructor(private dialog: MatDialog, private injector: Injector, private authService: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '380px'
    });
  }

  login() {
    this.userLoginDetails = {
      email: this.email,
      password: this.password
    };
    this.authService.login(this.userLoginDetails).subscribe(message => {
      if (message.response.length !== 0) {
        this.returnMsg = message.response;
      } else {
        this.authService.setCurrentUser(message.user);
        this.dialog.closeAll();
        this.redirectTo('/home');
      }
    }, (error: HttpErrorResponse) => {
      this.errorMsg = 'There was an error';
      console.log('Error-->', error);
    });
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/become-a-pro', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }

  openRegisterModal() {
    this.dialog.closeAll();
    const register = this.injector.get(RegisterComponent);
    register.openDialog();
  }

  openForgotPasswordModal() {
    this.dialog.closeAll();
    const forgotPassword = this.injector.get(ForgotPasswordComponent);
    forgotPassword.openDialog();
  }
}
