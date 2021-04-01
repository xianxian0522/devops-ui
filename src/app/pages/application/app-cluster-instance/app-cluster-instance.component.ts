import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NzFormatEmitEvent, NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {FormBuilder} from '@angular/forms';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {AppService} from '../../../share/services/app.service';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AppInstance, AppReplicaSet} from '../../../share/mode/app';
import {ActivatedRoute} from '@angular/router';
import {BaseCommonComponent} from '../../../share/base-common/base-common.component';
import {merge} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {NzModalService} from 'ng-zorro-antd/modal';
import {CommonFormComponent} from '../common-form/common-form.component';
import {AppRsInstanceEditComponent} from '../app-rs-instance-edit/app-rs-instance-edit.component';

@Component({
  selector: 'app-app-cluster-instance',
  templateUrl: './app-cluster-instance.component.html',
  styleUrls: ['./app-cluster-instance.component.less']
})
export class AppClusterInstanceComponent extends BaseCommonComponent<any> implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
    protected appService: AppService,
    protected baseRepository: BaseRepository<AppReplicaSet>,
    protected messageService: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private modalService: NzModalService,
  ) {
    super(baseRepository, messageService);
  }

  searchForm = this.fb.group({
    Name: [],
  });
  listOfData: AppInstance[] = [];

  nodesData: NzTreeNodeOptions[] = [];
  clusterId!: number;
  protected urlFragment = 'rs';
  rsId!: number;
  isResultLoading = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params && params.get('clusterId')) {
        this.clusterId = parseInt(params.get('clusterId') as string, 10);
      }
    });

    this.baseRepository.getRsByClusterId(this.clusterId).subscribe(res => {
      if (res && res.length > 0) {
        const logic = res.map(r => ({logicIdcID: r.LogicIdcEnv.LogicIdc.ID, name: r.LogicIdcEnv.LogicIdc.Name}));
        const result: any = [];
        const obj: any = {};
        logic.forEach(item => {
          if (!obj[item.logicIdcID]) {
            result.push(item);
            obj[item.logicIdcID] = true;
          }
        });

        const nodesTree: NzTreeNodeOptions[] = [];
        result.map((logicIdc: any, index: number) => {
          nodesTree.push({
            title: logicIdc.name,
            key: logicIdc.logicIdcID,
            expanded: true,
            children: [],
          });
          res.map(r => {
            if (logicIdc.logicIdcID === r.LogicIdcEnv.LogicIdc.ID) {
              (nodesTree[index].children as NzTreeNodeOptions[]).push({
                title: r.LogicIdcEnv.Env.Name,
                key: r.ID + '-' + r.LogicIdcEnv.ID + '-' + logicIdc.logicIdcID + '-' + r.LogicIdcEnv.Env.ID,
                checked: true,
                selected: false
              });
            }
          });
        });
        this.nodesData = nodesTree;
      }
    });
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();

    merge(this.refresh).pipe(
      debounceTime(200),
      switchMap(v => {
        this.isResultLoading = true;
        return this.baseRepository.queryRsInstance(v);
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      this.listOfData = res;
      this.resourceData = res;
    });
  }

  showCreateDialog(): void {
    this.modalService.create({
      nzContent: AppRsInstanceEditComponent,
      nzComponentParams: {data: {}, mode: 'created', rsId: this.rsId},
      nzWidth: '80vw',
      nzFooter: null,
      nzTitle: '新增实例',
    }).afterClose.subscribe(_ => {
      if (_) {
        this.refresh.emit(this.rsId);
      }
    });
  }
  showEditDialog(ele: AppInstance): void {
    this.modalService.create({
      nzTitle: '修改实例',
      nzComponentParams: {data: ele, mode: 'edit', rsId: this.rsId},
      nzWidth: '80vw',
      nzFooter: null,
      nzContent: AppRsInstanceEditComponent,
    }).afterClose.subscribe(_ => {
      if (_) {
        this.refresh.emit(this.rsId);
      }
    });
  }

  queryEvent(event: number): void {
    this.rsId = event;
    this.refresh.emit(event);
    // console.log(this.rsId, this.nodesData);
    const data = this.nodesData.map(k => k.children);
    const arr = this.flattenDeep(data);
    arr.map((k: any) => {
      const id = parseInt(k.key.split('-')[0], 10);
      if (id !== this.rsId) {
        k.selected = false;
      }
    });
  }
  flattenDeep(arr: any): any {
    return arr.reduce((acc: any, val: any) => Array.isArray(val) ?
      acc.concat(this.flattenDeep(val)) : acc.concat(val), []);
  }
}
