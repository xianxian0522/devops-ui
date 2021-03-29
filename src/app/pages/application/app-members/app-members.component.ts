import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AppMember} from '../../../share/mode/app';
import {AppService} from '../../../share/services/app.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {BaseRepository} from '../../../share/services/base.repository';

@Component({
  selector: 'app-app-members',
  templateUrl: './app-members.component.html',
  styleUrls: ['./app-members.component.less']
})
export class AppMembersComponent extends AppBaseCommonComponent<AppMember> implements OnInit {

  constructor(
    private fb: FormBuilder,
    protected appService: AppService,
    protected baseRepository: BaseRepository<AppMember>,
    private modalService: NzModalService,
    private messageService: NzMessageService,
  ) {
    super(appService, baseRepository);
  }

  searchForm = this.fb.group({
    Username: [],
    Role: [],
  });

  protected urlString = 'member';

  ngOnInit(): void {
  }

  showCreateDialog(): void {
    // this.modalService.create({
    //   nzFooter: null,
    //   nzContent: BizMemberEditComponent,
    //   nzComponentParams: {data: {}, bizId: this.bizId, mode: 'created'},
    // }).afterClose.subscribe(_ => {
    //   if (_) {
    //     this.bizService.refresh.emit();
    //   }
    // });
  }
  showEditDialog(ele: AppMember): void {
    // this.modalService.create({
    //   nzFooter: null,
    //   nzContent: BizMemberEditComponent,
    //   nzComponentParams: {data: ele, bizId: this.bizId, mode: 'edit'},
    // }).afterClose.subscribe(_ => {
    //   if (_) {
    //     this.bizService.refresh.emit();
    //   }
    // });
  }
  deleteMember(id: number): void {
    // this.baseRepository.deleteBizMemberById(id).subscribe(_ => {
    //   this.bizService.refresh.emit();
    //   this.messageService.success('删除成功');
    // });
  }
  onCancel(): void {
    // this.messageService.info('取消删除');
  }

}
