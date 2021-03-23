import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-biz-host-details',
  templateUrl: './biz-host-details.component.html',
  styleUrls: ['./biz-host-details.component.less']
})
export class BizHostDetailsComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  listOfData = [
    {
      name: 'qb-server',
      displayName: 'QB后端服务',
    }
  ];
  total = 1;
  pageIndex = 1;
  pageSize = 10;
  searchForm = this.fb.group({
    name: [],
    displayName: [],
  });

  ngOnInit(): void {
  }

}
