import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from '../menu';
import {AppService} from '../services/app.service';
import {ActivatedRoute} from '@angular/router';
import {BaseRepository} from '../services/base.repository';
import {App} from '../mode/app';

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
  ) { }

  sectionItem: MenuItem[] = [];
  name = '名字';

  ngOnInit(): void {
    this.sectionItem = this.menu.getItems('app');

    this.appService.getAppId();

    this.baseRepository.queryDetailsById(this.appService.appId, 'app').subscribe(res => {
      this.name = res.Name;
    });
  }

}
