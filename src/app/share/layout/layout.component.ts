import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Menu, MenuItem} from '../menu';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {BizService} from '../services/biz.service';
import {BaseRepository} from '../services/base.repository';
import {Biz} from '../mode/biz';
import {Location} from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
    private router: Router,
    public bizService: BizService,
    private baseRepository: BaseRepository<any>,
    private location: Location,
  ) { }
  
  // selectedValue = new FormControl(null);
  // selectBizList: Biz[] = [];
  sectionItem: MenuItem[] = [];
  helper = new JwtHelperService();
  username = '用户名';
  section = 'biz';

  ngOnInit(): void {
    // this.baseRepository.queryAll().subscribe(res => {
    //   this.selectBizList = res;
    //   this.selectedValue.setValue(res[0].ID);
    //   localStorage.setItem('bizID', this.selectedValue.value);
    // });

    // const url = this.location.path();
    // this.section = url.split('/')[1];
    // console.log(url, 'url', this.section);
    // if (this.section === 'biz') {
    //   this.bizService.getSelectBizList();
    // }
    //
    // this.sectionItem = this.menu.getItems('biz');
    // console.log(this.sectionItem);

    const token = localStorage.getItem('token') || '';
    try {
      const user = this.helper.decodeToken(token);
      this.username = user.name || user.username;
    } catch (e) {
      console.log(e);
    }

    // this.selectedValue.valueChanges.subscribe(value => {
    //   // localStorage.setItem('bizID', value);
    //   this.bizService.refresh.emit();
    // });
    // this.bizService.selectedValue.valueChanges.subscribe(value => {
    //   this.bizService.refresh.emit();
    // });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
