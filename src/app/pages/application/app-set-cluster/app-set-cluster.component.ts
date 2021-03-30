import { Component, OnInit } from '@angular/core';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {AppCluster} from '../../../share/mode/app';
import {AppService} from '../../../share/services/app.service';
import {BaseRepository} from '../../../share/services/base.repository';
import {FormBuilder} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';

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
  ) {
    super(appService, baseRepository, messageService);
  }

  searchForm = this.fb.group({
    Name: [],
  });

  protected urlString = 'cluster';

  ngOnInit(): void {
  }

}
