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

    this.baseRepository.queryAllLogicidcenv().subscribe(res => {
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
        // console.log(logic, result, '去重');
        const nodesTree: NzTreeNodeOptions[] = [];
        result.forEach((l: any, index: number) => {
          nodesTree.push({
            title: l.name,
            key: l.logicIdcID,
            disabled: true,
            children: [],
          });
          res.forEach(r => {
            if (l.logicIdcID === r.LogicIdc.ID) {
              // console.log(l, r);
             (nodesTree[index].children as NzTreeNodeOptions[]).push({
                title: r.Env.Name,
                key: r.ID + '-' + l.logicIdcID + '-' + r.Env.ID,
                isLeaf: true,
              });
            }
          });
        });
        console.log(nodesTree);
        this.nodesData = nodesTree;
      }
    });
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
