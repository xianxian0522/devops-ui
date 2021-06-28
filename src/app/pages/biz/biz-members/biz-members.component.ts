import {AfterViewInit, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BizService} from '../../../share/services/biz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {MemberEditComponent} from '../../member-edit/member-edit.component';
import {BizMember, User} from '../../../share/mode/biz';
import {BizBaseCommonComponent} from '../../../share/base-common/biz-base-common.component';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-biz-members',
  templateUrl: './biz-members.component.html',
  styleUrls: ['./biz-members.component.less']
})
export class BizMembersComponent extends BizBaseCommonComponent<BizMember> implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
    protected baseRepository: BaseRepository<BizMember>,
    protected bizService: BizService,
    private modalService: NzModalService,
    protected messageService: NzMessageService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
  ) {
    super(bizService, baseRepository, messageService, activatedRoute, router);
  }

  protected urlString = 'member';

  searchForm = this.fb.group({
    Username: [],
    Role: [],
  });
  // listOfData: BizMember[] = [];
  // isResultLoading = false;
  // @Output() refresh = new EventEmitter();
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
    //
    // this.onSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
    //   debounceTime(200),
    //   switchMap(_ => {
    //     this.isResultLoading = true;
    //     const value = {...this.searchForm.value};
    //     return this.baseRepository.queryAllListByBizId('member', this.bizId, value);
    //   })
    // ).subscribe(res => {
    //   this.isResultLoading = false;
    //   this.listOfData = res;
    // });
    //
    // this.bizService.refresh.emit();
  }

  showCreateDialog(): void {
    this.modalService.create({
      nzFooter: null,
      nzContent: MemberEditComponent,
      nzComponentParams: {data: {}, id: this.bizId, mode: 'created', urlFragment: 'biz'},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.bizService.refresh.emit();
      }
    });
  }
  showEditDialog(ele: BizMember): void {
    this.modalService.create({
      nzFooter: null,
      nzContent: MemberEditComponent,
      nzComponentParams: {data: ele, id: this.bizId, mode: 'edit', urlFragment: 'biz'},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.bizService.refresh.emit();
      }
    });
  }
}
