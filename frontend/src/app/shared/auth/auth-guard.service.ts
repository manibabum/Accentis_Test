import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {  
    if(localStorage.getItem('token')!=null)
    return true;
    this.router.navigate(['/login']);
    return false;
    //return this.authService.isAuthenticated();
  }
}
