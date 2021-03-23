import { Component, OnInit } from '@angular/core';
import {LoginServices} from '../../share/services/login.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.less']
})
export class MiddleComponent implements OnInit {

  constructor(
    private loginServices: LoginServices,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('/biz/index');
    } else {
      this.loginServices.login().subscribe(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('biz/index');
        }
      });
    }
  }

}
