import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';
import {BaseCommonEditComponent} from '../../../share/base-common-edit/base-common-edit.component';

@Component({
  selector: 'app-app-set-cluster-edit',
  templateUrl: './app-set-cluster-edit.component.html',
  styleUrls: ['./app-set-cluster-edit.component.less']
})
export class AppSetClusterEditComponent extends BaseCommonEditComponent<any> implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    protected fb: FormBuilder,
    protected baseRepository: BaseRepository<any>,
    protected messageService: NzMessageService,
  ) {
    super(fb, baseRepository, messageService);
  }

  editForm = this.fb.group({
    Comment: [],
    Name: [],
  });
  isAdvancedSettingShow = false;
  editInstanceForm = this.fb.group({
    BindInfos: this.fb.array([
      this.fb.group({
        Ip: [],
        Name: [],
        Port: [],
        Protocol: []
      })
    ]),
    EnvVars: this.fb.array([
      this.fb.group({
        Name: [],
        Value: [],
      })
    ]),
    Comment: [],
    DataDir: [],
    LogDir: [],
    MetricEndpoint: [],
    Name: [],
    State: [],
    User: [],
    WorkDir: [],
  });
  id!: number;

  protected urlString = 'cluster';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params && params.get('clusterId')) {
        this.id = parseInt(params.get('clusterId') as string, 10);
      }
    });
  }
}
