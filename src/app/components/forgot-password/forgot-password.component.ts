import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Injector } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private dialog: MatDialog, private injector: Injector) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '380px'
    });
  }

  openLoginModal() {
    this.dialog.closeAll();
    const login = this.injector.get(LoginComponent);
    login.openDialog();
  }

}
