import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BecomeAProComponent } from './components/become-a-pro/become-a-pro.component';
import { ProStepperComponent } from './components/pro-stepper/pro-stepper.component';
import { NoAuthGuard } from './shared/security/no-auth-guard/NoAuthGuard';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'become-a-pro',
        component: BecomeAProComponent
      },
      {
        path: 'pro-stepper',
        component: ProStepperComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'user-dashboard',
        component: UserDashboardComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'search-results',
        component: SearchResultsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
