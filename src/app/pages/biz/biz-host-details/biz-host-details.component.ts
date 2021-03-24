import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BizService} from '../../../share/services/biz.service';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BaseRepository} from '../../../share/services/base.repository';
import {BizHost} from '../../../share/mode/biz';

@Component({
  selector: 'app-biz-host-details',
  templateUrl: './biz-host-details.component.html',
  styleUrls: ['./biz-host-details.component.less']
})
export class BizHostDetailsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private bizService: BizService,
    private baseRepository: BaseRepository<any>,
  ) { }

  listOfData: BizHost[] = [];
  total = 1;
  pageIndex = 1;
  pageSize = 10;
  isResultLoading = false;
  searchForm = this.fb.group({
    name: [],
    displayName: [],
  });
  bizId: number = this.bizService.selectedValue.value;
  unSubscribe!: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bizService.selectedValue.valueChanges.subscribe(value => {
      this.bizId = value;
      this.bizService.refresh.emit();
    });

    this.unSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        const value = {...this.searchForm.value};
        return this.baseRepository.queryAllListByBizId('host', this.bizId, value);
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      this.listOfData = res;
    });

    this.bizService.refresh.emit();
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }
}
