import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biz-set-app',
  templateUrl: './biz-set-app.component.html',
  styleUrls: ['./biz-set-app.component.less']
})
export class BizSetAppComponent implements OnInit {

  constructor() { }

  listOfData = [
    {
      name: 'qb-server',
      displayName: 'QB后端服务',
      level: 'P0',
    }
  ];
  total = 1;
  pageIndex = 1;
  pageSize = 10;

  ngOnInit(): void {
  }

}
