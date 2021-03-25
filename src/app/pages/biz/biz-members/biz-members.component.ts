import {AfterViewInit, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BizService} from '../../../share/services/biz.service';

@Component({
  selector: 'app-biz-members',
  templateUrl: './biz-members.component.html',
  styleUrls: ['./biz-members.component.less']
})
export class BizMembersComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private baseRepository: BaseRepository<any>,
    private bizService: BizService,
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
  bizId: number = this.bizService.selectedValue.value;
  onSubscribe!: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bizService.selectedValue.valueChanges.subscribe(value => {
      this.bizId = value;
      this.bizService.refresh.emit();
    });

    this.onSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
      debounceTime(200),
      switchMap(_ => {
        const value = {...this.searchForm.value};
        return this.baseRepository.queryAllMembersByBizId(this.bizId, value);
      })
    ).subscribe(res => {

    });

    this.bizService.refresh.emit();
  }

  ngOnDestroy(): void {
    this.onSubscribe.unsubscribe();
  }

}
