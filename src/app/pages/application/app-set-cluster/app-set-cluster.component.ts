import { Component, OnInit } from '@angular/core';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {AppCluster} from '../../../share/mode/app';
import {AppService} from '../../../share/services/app.service';
import {BaseRepository} from '../../../share/services/base.repository';
import {FormBuilder} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalService} from 'ng-zorro-antd/modal';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-app-set-cluster',
  templateUrl: './app-set-cluster.component.html',
  styleUrls: ['./app-set-cluster.component.less']
})
export class AppSetClusterComponent extends AppBaseCommonComponent<AppCluster> implements OnInit {

  constructor(
    protected appService: AppService,
    protected baseRepository: BaseRepository<AppCluster>,
    private fb: FormBuilder,
    protected messageService: NzMessageService,
    protected activatedRoute: ActivatedRoute,
  ) {
    super(appService, baseRepository, messageService, activatedRoute);
  }

  searchForm = this.fb.group({
    Name: [],
  });
  isVisible = false;
  editForm = this.fb.group({
    Comment: [],
    Name: [],
  });

  protected urlString = 'cluster';

  ngOnInit(): void {
  }

  deleteCluster(): void {

  }

  showCreateDialog(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  handleOk(): void {
    const value = {...this.editForm.value};
    this.baseRepository.updateOrAdd('app', this.appId, value, this.urlString).subscribe(_ => {
      this.messageService.success('新增成功');
      this.isVisible = false;
      this.refresh.emit();
    });
  }

}
