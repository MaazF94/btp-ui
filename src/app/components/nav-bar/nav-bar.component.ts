import { AuthService } from './../../shared/services/auth/auth.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { SearchResultService } from 'src/app/shared/services/search-result/search-result.service';
import { HttpErrorResponse } from '@angular/common/http/http';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn: boolean;
  isProfessional: boolean;
  name: string;
  searchQuery: string;
  returnMsg: string;
  errorMsg: string;
  searchResultsPage = false;

  constructor(private login: LoginComponent, private register: RegisterComponent, private authService: AuthService,
              private route: Router, private searchResultService: SearchResultService,
              private searchResult: SearchResultsComponent) {
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

  search() {
    this.searchResultService.getSearchResult(this.searchQuery).subscribe(message => {
      if (message.response.length !== 0) {
        this.returnMsg = message.response;
      } else {
        this.searchResultService.setSearchResult(message.searchResult);
        this.searchResultService.setSearchQuery(this.searchQuery);
        this.redirectTo('/search-results');
      }
    }, (error: HttpErrorResponse) => {
      this.errorMsg = 'There was an error';
      console.log('Error-->', error);
    });
  }

  redirectTo(uri: string) {
    this.route.navigateByUrl('/become-a-pro', {skipLocationChange: true}).then(() =>
    this.route.navigate([uri]));
  }

}
