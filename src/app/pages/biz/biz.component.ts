import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.less']
})
export class BizComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      name: 'qb-server',
      displayName: 'QB后端服务',
      level: 'P0',
    }
  ];
  total = 1;
  pageSize = 10;
  pageIndex = 1;

  ngOnInit(): void {
  }

}
