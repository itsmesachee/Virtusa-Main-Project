import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth: ApiService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLoggedIn())
      return true;

    this.router.navigate(['home']);
    return false;
  }
}
