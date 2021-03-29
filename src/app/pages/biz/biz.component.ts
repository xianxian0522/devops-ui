import {AfterViewInit, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {BaseRepository} from '../../share/services/base.repository';
import {merge, Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import {Biz} from '../../share/mode/biz';
import {BizService} from '../../share/services/biz.service';
import {LayoutComponent} from '../../share/layout/layout.component';
import {BizApp} from '../../share/mode/biz';
import {BizBaseCommonComponent} from '../../share/base-common/biz-base-common.component';

@Component({
  selector: 'app-business',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.less']
})
export class BizComponent extends BizBaseCommonComponent<BizApp> implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected baseRepository: BaseRepository<BizApp>,
    private fb: FormBuilder,
    protected bizService: BizService,
  ) {
    super(bizService, baseRepository);
  }

  protected urlString = 'app';

  // listOfData: BizApp[] = [];
  // isResultLoading = false;
  searchForm = this.fb.group({
    Name: [],
  });
  // bizId: number = this.bizService.selectedValue.value;
  // onSubscribe!: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    // const  bizId = parseInt(localStorage.getItem('bizID') as string, 10);
    // const bizId = this.bizService.selectedValue.value;
    // console.log(bizId, 'v');

    // this.bizService.selectedValue.valueChanges.subscribe(value => {
    //   this.bizId = value;
    //   this.bizService.refresh.emit();
    // });
    //
    // this.onSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
    //   debounceTime(200),
    //   switchMap(_ => {
    //     this.isResultLoading = true;
    //     const value = {...this.searchForm.value};
    //     return this.baseRepository.queryAllListByBizId('app', this.bizId, value);
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
