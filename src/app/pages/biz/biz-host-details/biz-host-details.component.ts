import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BizService} from '../../../share/services/biz.service';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BaseRepository} from '../../../share/services/base.repository';
import {BizApp, BizHost} from '../../../share/mode/biz';
import {BizBaseCommonComponent} from '../../../share/base-common/biz-base-common.component';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalService} from 'ng-zorro-antd/modal';
import {BizDistributionAppComponent} from '../biz-distribution-app/biz-distribution-app.component';
import {ActivatedRoute, Router} from '@angular/router';

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
    protected messageService: NzMessageService,
    private modalService: NzModalService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
  ) {
    super(bizService, baseRepository, messageService, activatedRoute, router);
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
    super.ngOnInit();
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

  showModal(ele: BizHost): void {
    let appsId: number[] = [];
    if (ele.Apps) {
      appsId = ele.Apps.map(app => app.ID);
    }
    this.modalService.create({
      nzContent: BizDistributionAppComponent,
      nzFooter: null,
      nzTitle: '分配应用',
      nzComponentParams: {bizId: this.bizId, appsIds: appsId, hostId: ele.ID},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.refresh.emit();
      }
    });
  }
}
