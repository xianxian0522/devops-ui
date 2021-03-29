import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from '../menu';
import {AppService} from '../services/app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.less']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
    private appService: AppService,
  ) { }

  sectionItem: MenuItem[] = [];

  ngOnInit(): void {
    this.sectionItem = this.menu.getItems('app');

    this.appService.getAppId();
    // console.log(this.appService.appId);
  }

}
