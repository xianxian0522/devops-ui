import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-biz-members',
  templateUrl: './biz-members.component.html',
  styleUrls: ['./biz-members.component.less']
})
export class BizMembersComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  searchForm = this.fb.group({
    username: [],
    role: [],
  });
  listOfData = [
    {
      username: 'sheng.xu',
      role: 'owner'
    },
    {
      username: 'san.zhang',
      role: 'test',
    }
  ];
  total = 1;
  pageIndex = 1;
  pageSize = 10;

  ngOnInit(): void {
  }

}
