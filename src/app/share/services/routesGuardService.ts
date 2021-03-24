import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BizService} from './biz.service';

@Injectable()
export class RoutesGuardService implements CanActivate, CanActivateChild {
  constructor(private bizService: BizService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.bizService.getSelectBizList();
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('child');
    return true;
  }
}
