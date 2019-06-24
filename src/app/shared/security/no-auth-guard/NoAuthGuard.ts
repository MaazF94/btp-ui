import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) {}

    canActivate(
     route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
  ): boolean {
        if (this.authService.loggedIn) {
            return true;
        } else {
            this.route.navigateByUrl('/home');
        }
    }
}