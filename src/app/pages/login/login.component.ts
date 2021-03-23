import { Component, OnInit } from '@angular/core';
import {LoginServices} from '../../share/services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginServices: LoginServices,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loginServices.login().subscribe(res => {
      window.location.href = res.url;
    });
  }
}
