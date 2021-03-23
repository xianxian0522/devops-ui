import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-biz-set-information',
  templateUrl: './biz-set-information.component.html',
  styleUrls: ['./biz-set-information.component.less']
})
export class BizSetInformationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  editForm = this.fb.group({
    username: [],
    realName: [],
    comment: [],
    userId: [],
  });

  ngOnInit(): void {
  }

}
