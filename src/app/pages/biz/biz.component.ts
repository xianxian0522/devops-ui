import {AfterViewInit, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {BaseRepository} from '../../share/services/base.repository';
import {merge, of, Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {Biz} from '../../share/mode/biz';
import {BizService} from '../../share/services/biz.service';
import {LayoutComponent} from '../../share/layout/layout.component';
import {BizApp} from '../../share/mode/biz';
import {BizBaseCommonComponent} from '../../share/base-common/biz-base-common.component';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ActivatedRoute} from '@angular/router';

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
    protected messageService: NzMessageService,
    protected activatedRoute: ActivatedRoute,
  ) {
    super(bizService, baseRepository, messageService, activatedRoute);
  }

  protected urlString = 'app';

  // listOfData: BizApp[] = [];
  // isResultLoading = false;
  searchForm = this.fb.group({
    Name: [],
  });
  // bizId: number = this.bizService.selectedValue.value;
  // onSubscribe!: Subscription;
  filterSubscribe!: Subscription;

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.filterSubscribe = this.bizService.selectBizList.valueChanges.subscribe(r => {
      super.filterBizInfo(this.bizId);
    });

    super.filterBizInfo(this.bizId);
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

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.filterSubscribe.unsubscribe();
  }

}
