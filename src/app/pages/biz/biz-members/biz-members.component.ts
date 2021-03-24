import {AfterViewInit, Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {merge} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-biz-members',
  templateUrl: './biz-members.component.html',
  styleUrls: ['./biz-members.component.less']
})
export class BizMembersComponent implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
    private baseRepository: BaseRepository<any>,
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
  @Output() refresh = new EventEmitter();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    merge(this.refresh).pipe(
      debounceTime(200),
      // switchMap(_ => {
      //   return this.baseRepository.queryBizMembers();
      // })
    ).subscribe(res => {

    });

    this.refresh.emit();
  }

}
