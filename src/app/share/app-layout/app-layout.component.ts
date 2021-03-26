import { Component, OnInit } from '@angular/core';
import {Menu, MenuItem} from '../menu';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.less']
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
  ) { }

  sectionItem: MenuItem[] = [];

  ngOnInit(): void {
    this.sectionItem = this.menu.getItems('app');
  }

}
