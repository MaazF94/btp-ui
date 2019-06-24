import { HttpErrorResponse } from '@angular/common/http';
import { User } from './../../shared/models/user/user';
import { UserRegistrationService } from './../../shared/services/user-registration/user-registration.service';
import { Component, OnInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { Professional } from 'src/app/shared/models/professional/professional';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerBtnClicked = false;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  school: string;
  fullNameMissing = false;
  emailMissing = false;
  passwordMissing = false;
  confirmPasswordMissing = false;
  emailErrMsg = '';
  confirmpasswordErrMsg = '';
  fullNameErrMsg = '';
  userInfo = {
    userId: 0,
    fullName: '',
    email: '',
    password: '',
    school: '',
    isActive: 1,
    professional: new Professional()
  };
  returnMsg = '';
  errorMsg = '';

  constructor(private dialog: MatDialog, private injector: Injector,
              private userRegService: UserRegistrationService, private router: Router) {
    this.userInfo = new User();
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '380px'
    });
  }

  openLoginModal() {
    this.dialog.closeAll();
    const login = this.injector.get(LoginComponent);
    login.openDialog();
  }

  register() {
    if (!this.isFieldsValid()) {
      return;
    }
    this.setUser();
    this.userRegService.registerUser(this.userInfo).subscribe(message => {
      if (message.response.length !== 0) {
        this.returnMsg = message.response;
      } else {
        this.dialog.closeAll();
        this.router.navigateByUrl('/home');
      }
    }, (error: HttpErrorResponse) => {
      this.errorMsg = 'There was an error';
      console.log('Error-->', error);
    });
  }

  setUser() {
    this.userInfo.fullName = this.fullName;
    this.userInfo.email = this.email;
    this.userInfo.password = this.password;
    this.userInfo.school = this.school;
    this.userInfo.isActive = 1;
    this.userInfo.userId = 0;
  }

  isFieldsValid(): boolean {
    if (this.isFullNameValid()) {
      return false;
    } else if (this.isEmailValid()) {
      return false;
    } else if (this.isPasswordValid()) {
      return false;
    } else if (this.isConfirmPasswordValid()) {
      return false;
    }
    return true;
  }

  isFullNameValid() {
    if (this.fullName === undefined || this.fullName === '') {
      this.fullNameErrMsg = 'Name is required';
      return this.fullNameMissing = true;
    }
    this.fullNameErrMsg = '';
    return this.fullNameMissing = false;
  }

  isEmailValid() {
    var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (this.email === undefined || this.email === '') {
      this.emailErrMsg = 'Email is required';
      this.returnMsg = '';
      return this.emailMissing = true;
    } else if (!regExp.test(this.email)) {
      this.emailErrMsg = 'Incorrect email format';
      this.returnMsg = '';
      return this.emailMissing = true;
    }
    this.emailErrMsg = '';
    this.returnMsg = '';
    return this.emailMissing = false;
  }

  isPasswordValid() {
    if (this.password === undefined || this.password === '') {
      return this.passwordMissing = true;
    }
    return this.passwordMissing = false;
  }

  isConfirmPasswordValid() {
    if (this.confirmPassword === undefined || this.confirmPassword === '') {
      this.confirmpasswordErrMsg = 'Please confirm your password';
      return this.confirmPasswordMissing = true;
    } else if (this.confirmPassword !== this.password) {
      this.confirmpasswordErrMsg = 'Passwords do not match';
      return this.confirmPasswordMissing = true;
    }
    this.confirmpasswordErrMsg = '';
    return this.confirmPasswordMissing = false;
  }


}
