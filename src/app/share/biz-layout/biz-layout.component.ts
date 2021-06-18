import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from '../menu';
import {Router} from '@angular/router';
import {BizService} from '../services/biz.service';

@Component({
  selector: 'app-biz-layout',
  templateUrl: './biz-layout.component.html',
  styleUrls: ['./biz-layout.component.less']
})
export class BizLayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
    private router: Router,
    public bizService: BizService,
  ) { }

  sectionItem: MenuItem[] = [];

  ngOnInit(): void {
    // this.bizService.getSelectBizList();
    this.sectionItem = this.menu.getItems('biz');
  }

}
