import { Injectable } from '@angular/core';
import {TookenService} from './signin/tooken.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot , Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AfterLoginService implements CanActivate {
  constructor(private token: TookenService , private _router: Router) { }
  canActivate() {
    if (!(this.token.loggedIn())) {
      return true;
    } else {
      this._router.navigate(['./']);

      return false;
    }
  }
}
