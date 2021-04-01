import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';
import {BaseCommonEditComponent} from '../../../share/base-common-edit/base-common-edit.component';
import {NzFormatEmitEvent, NzTreeNodeOptions} from 'ng-zorro-antd/tree';

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
  // isAdvancedSettingShow = false;
  // editInstanceForm = this.fb.group({
  //   BindInfos: this.fb.array([
  //     this.fb.group({
  //       Ip: [],
  //       Name: [],
  //       Port: [],
  //       Protocol: []
  //     })
  //   ]),
  //   EnvVars: this.fb.array([
  //     this.fb.group({
  //       Name: [],
  //       Value: [],
  //     })
  //   ]),
  //   Comment: [],
  //   DataDir: [],
  //   LogDir: [],
  //   MetricEndpoint: [],
  //   Name: [],
  //   State: [],
  //   User: [],
  //   WorkDir: [],
  // });
  id!: number;

  nodesData: NzTreeNodeOptions[] = [];

  protected urlString = 'cluster';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params && params.get('clusterId')) {
        this.id = parseInt(params.get('clusterId') as string, 10);
      }
    });

    this.baseRepository.queryAllLogicIdcEnv().subscribe(res => {
      if (res && res.length > 0) {
        const logic = res.map(r => ({logicIdcID: r.LogicIdc.ID, name: r.LogicIdc.Name}));
        const result: any = [];
        const obj: any = {};
        logic.forEach(item => {
          if (!obj[item.logicIdcID]) {
            result.push(item);
            obj[item.logicIdcID] = true;
          }
        });

        let logicIdcEnvIds: number[] = [];
        this.baseRepository.getRsByClusterId(this.id).subscribe(rs => {
          // 获取集群副本集里的逻辑机房环境 是否绑定逻辑机房环境
          if (rs) {
            logicIdcEnvIds = rs.map(r => r.LogicIdcEnv.ID);
          }

          // console.log(logic, result, '去重');
          const nodesTree: NzTreeNodeOptions[] = [];
          result.forEach((l: any, index: number) => {
            nodesTree.push({
              title: l.name,
              key: l.logicIdcID,
              expanded: true,
              children: [],
            });
            res.forEach(r => {
              if (l.logicIdcID === r.LogicIdc.ID) {
                if (logicIdcEnvIds.includes(r.ID)) {
                  (nodesTree[index].children as NzTreeNodeOptions[]).push({
                    title: r.Env.Name,
                    key: r.ID + '-' + l.logicIdcID + '-' + r.Env.ID,
                    checked: true,
                    selected: true
                  });
                } else {
                  (nodesTree[index].children as NzTreeNodeOptions[]).push({
                    title: r.Env.Name,
                    key: r.ID + '-' + l.logicIdcID + '-' + r.Env.ID,
                    checked: true,
                    selected: false
                  });
                }
                // console.log(l, r, logicIdcEnvIds);
              }
            });
          });
          console.log(nodesTree);
          this.nodesData = nodesTree;
        });
      }
    });
  }

}
