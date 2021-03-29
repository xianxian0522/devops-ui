import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BizService} from '../../../share/services/biz.service';
import {BaseRepository} from '../../../share/services/base.repository';
import {BizApp} from '../../../share/mode/biz';
import {merge, Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BizBaseCommonComponent} from '../../../share/base-common/biz-base-common.component';

@Component({
  selector: 'app-biz-set-app',
  templateUrl: './biz-set-app.component.html',
  styleUrls: ['./biz-set-app.component.less']
})
export class BizSetAppComponent extends BizBaseCommonComponent<BizApp> implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected bizService: BizService,
    protected baseRepository: BaseRepository<BizApp>,
    private fb: FormBuilder,
  ) {
    super(bizService, baseRepository);
  }

  protected urlString = 'app';

  searchForm = this.fb.group({
    Name: [],
  });
  // listOfData: BizApp[] = [];
  // isResultLoading = false;
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
    //
    // this.onSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
    //   debounceTime(200),
    //   switchMap(_ => {
    //     this.isResultLoading = true;
    //     return this.baseRepository.queryAllListByBizId('app', this.bizId);
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
