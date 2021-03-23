import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Menu, MenuItem} from '../menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
  ) { }
  
  selectedValue = new FormControl('');
  sectionItem: MenuItem[] = [];

  ngOnInit(): void {
    this.sectionItem = this.menu.getItems('biz');
    console.log(this.sectionItem);
  }

}
