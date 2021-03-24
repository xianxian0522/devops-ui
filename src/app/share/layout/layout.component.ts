import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Menu, MenuItem} from '../menu';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
    private router: Router,
  ) { }
  
  selectedValue = new FormControl('QB');
  sectionItem: MenuItem[] = [];
  helper = new JwtHelperService();
  username = '用户名';

  ngOnInit(): void {
    this.sectionItem = this.menu.getItems('biz');
    console.log(this.sectionItem);

    const token = localStorage.getItem('token') || '';
    try {
      const user = this.helper.decodeToken(token);
      this.username = user.name || user.username;
    } catch (e) {
      console.log(e);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
