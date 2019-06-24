import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit, Injector } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-become-a-pro',
  templateUrl: './become-a-pro.component.html',
  styleUrls: ['./become-a-pro.component.css']
})
export class BecomeAProComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MatDialog, private injector: Injector,
              private route: Router) { }

  ngOnInit() {
  }

  proStepper() {
    if (!this.authService.loggedIn) {
      this.dialog.closeAll();
      const login = this.injector.get(LoginComponent);
      login.openDialog();
    } else {
      this.route.navigateByUrl('/pro-stepper');
    }
  }

}
