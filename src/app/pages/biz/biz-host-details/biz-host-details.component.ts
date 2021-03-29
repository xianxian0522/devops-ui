import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BizService} from '../../../share/services/biz.service';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BaseRepository} from '../../../share/services/base.repository';
import {BizHost} from '../../../share/mode/biz';
import {BizBaseCommonComponent} from '../../../share/base-common/biz-base-common.component';

@Component({
  selector: 'app-biz-host-details',
  templateUrl: './biz-host-details.component.html',
  styleUrls: ['./biz-host-details.component.less']
})
export class BizHostDetailsComponent extends BizBaseCommonComponent<BizHost> implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    protected bizService: BizService,
    protected baseRepository: BaseRepository<BizHost>,
  ) {
    super(bizService, baseRepository);
  }

  protected urlString = 'host';

  // listOfData: BizHost[] = [];
  // isResultLoading = false;
  searchForm = this.fb.group({
    Hostname: [],
    InnerIP: [],
  });
  // bizId: number = this.bizService.selectedValue.value;
  // onSubscribe!: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    // this.bizService.selectedValue.valueChanges.subscribe(value => {
    //   this.bizId = value;
    //   this.bizService.refresh.emit();
    // });

    // this.onSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
    //   debounceTime(200),
    //   switchMap(_ => {
    //     this.isResultLoading = true;
    //     const value = {...this.searchForm.value};
    //     return this.baseRepository.queryAllListByBizId('host', this.bizId, value);
    //   })
    // ).subscribe(res => {
    //   this.isResultLoading = false;
    //   this.listOfData = res;
    // });
    //
    // this.bizService.refresh.emit();
  }

  // ngOnDestroy(): void {
  //   this.onSubscribe.unsubscribe();
  // }
}
