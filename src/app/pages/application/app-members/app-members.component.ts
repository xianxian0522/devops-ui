import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AppMember} from '../../../share/mode/app';
import {AppService} from '../../../share/services/app.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {BaseRepository} from '../../../share/services/base.repository';
import {MemberEditComponent} from '../../member-edit/member-edit.component';
import {ActivatedRoute} from '@angular/router';

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
    protected messageService: NzMessageService,
    protected activatedRoute: ActivatedRoute,
  ) {
    super(appService, baseRepository, messageService, activatedRoute);
  }

  searchForm = this.fb.group({
    Username: [],
    Role: [],
  });

  protected urlString = 'member';

  ngOnInit(): void {
  }

  showCreateDialog(): void {
    this.modalService.create({
      nzFooter: null,
      nzContent: MemberEditComponent,
      nzComponentParams: {data: {}, id: this.appId, mode: 'created', urlFragment: 'app'},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.refresh.emit();
      }
    });
  }
  showEditDialog(ele: AppMember): void {
    this.modalService.create({
      nzFooter: null,
      nzContent: MemberEditComponent,
      nzComponentParams: {data: ele, id: this.appId, mode: 'edit', urlFragment: 'app'},
    }).afterClose.subscribe(_ => {
      if (_) {
        this.refresh.emit();
      }
    });
  }

}
