import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from '../menu';
import {AppService} from '../services/app.service';
import {ActivatedRoute} from '@angular/router';
import {BaseRepository} from '../services/base.repository';
import {App} from '../mode/app';
import {Location} from '@angular/common';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.less']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
    private appService: AppService,
    private baseRepository: BaseRepository<App>,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  sectionItem: MenuItem[] = [];
  name = '名字';
  appId = 0;

  ngOnInit(): void {
    this.sectionItem = this.menu.getItems('app');

    this.activatedRoute.paramMap.subscribe(params => {
      const url = this.location.path()?.split('/')?.[2];
      this.appId = parseInt(decodeURI(url), 10) || 0;
    });

    this.baseRepository.queryDetailsById(this.appId, 'app').subscribe(res => {
      this.name = res.Name;
    });
  }

}
