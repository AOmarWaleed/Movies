import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../sharData/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthReverceGuard implements CanActivate {
  constructor(private _authService:AuthService , private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._authService.userData.getValue()){
        this._router.navigate(['/home']);
        return false;
      }else {
        
        return true;


      }
  }
  
}
