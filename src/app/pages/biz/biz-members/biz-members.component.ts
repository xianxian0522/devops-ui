import {AfterViewInit, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BizService} from '../../../share/services/biz.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {BizMemberEditComponent} from '../biz-member-edit/biz-member-edit.component';
import {BizMember, User} from '../../../share/mode/biz';
import {BaseCommonComponent} from '../../../share/base-common/base-common.component';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-biz-members',
  templateUrl: './biz-members.component.html',
  styleUrls: ['./biz-members.component.less']
})
export class BizMembersComponent extends BaseCommonComponent<BizMember> implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
    protected baseRepository: BaseRepository<BizMember>,
    protected bizService: BizService,
    private modalService: NzModalService,
    private messageService: NzMessageService,
  ) {
    super(bizService, baseRepository);
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
      nzContent: BizMemberEditComponent,
      nzComponentParams: {data: {}, bizId: this.bizId, mode: 'created'},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.bizService.refresh.emit();
      }
    });
  }
  showEditDialog(ele: BizMember): void {
    this.modalService.create({
      nzFooter: null,
      nzContent: BizMemberEditComponent,
      nzComponentParams: {data: ele, bizId: this.bizId, mode: 'edit'},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.bizService.refresh.emit();
      }
    });
  }
  deleteMember(id: number): void {
    this.baseRepository.deleteBizMemberById(id).subscribe(_ => {
      this.bizService.refresh.emit();
      this.messageService.success('删除成功');
    });
  }
  onCancel(): void {
    this.messageService.info('取消删除');
  }
}
