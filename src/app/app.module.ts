import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatIconModule,
        MatListModule, MatSidenavModule,
        MatToolbarModule, MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatDividerModule,
        MatDialogModule,
        MAT_DIALOG_DEFAULT_OPTIONS,
        MatStepperModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryProfessionComponent } from './components/category-profession/category-profession.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BecomeAProComponent } from './components/become-a-pro/become-a-pro.component';
import { WhyJoinComponent } from './components/become-a-pro/why-join/why-join.component';
import { FormsModule } from '@angular/forms';
import { ProStepperComponent } from './components/pro-stepper/pro-stepper.component';
import { NoAuthGuard } from './shared/security/no-auth-guard/NoAuthGuard';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ReceivedAdviceComponent } from './components/received-advice/received-advice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CategoryProfessionComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    BecomeAProComponent,
    WhyJoinComponent,
    ProStepperComponent,
    UserDashboardComponent,
    ReceivedAdviceComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatStepperModule
  ],
  providers: [LoginComponent,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, RegisterComponent, ForgotPasswordComponent,
    NavBarComponent, NoAuthGuard, ProStepperComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegisterComponent, ForgotPasswordComponent]
})
export class AppModule { }
