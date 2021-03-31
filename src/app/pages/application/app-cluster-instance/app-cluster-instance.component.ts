import { Component, OnInit } from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd/tree';
import {FormBuilder} from '@angular/forms';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {AppService} from '../../../share/services/app.service';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AppReplicaSet} from '../../../share/mode/app';

@Component({
  selector: 'app-app-cluster-instance',
  templateUrl: './app-cluster-instance.component.html',
  styleUrls: ['./app-cluster-instance.component.less']
})
export class AppClusterInstanceComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    protected appService: AppService,
    protected baseRepository: BaseRepository<AppReplicaSet>,
    protected messageService: NzMessageService,
  ) {}

  searchForm = this.fb.group({
    Name: [],
  });
  listOfData: AppReplicaSet[] = [];

  nodes = [
    {
      title: 'QB',
      key: 'QB',
      children: [
        {
          title: '上海办公网',
          key: 'QB-1',
          children: [
            { title: '空闲', key: 'QB-1-1', isLeaf: true },
            { title: '开发环境', key: 'QB-1-2',
              children: [
                {title: 'APP:QBServer', key: 'QB-1-2-1',
                  children: [{title: 'CLUSTER: QBServer', key: 'QB-1-2-1-1', isLeaf: true}],
                }
              ],
            },
            { title: '测试环境', key: 'Qb-1-3',
              children: [
                {title: 'APP: QBServer', key: 'QB-1-2-2',
                  children: [{title: 'CLUSTER: QBServer', key: 'QB-1-2-1-1', isLeaf: true}]
                }
              ],
            }
          ]
        },
        {
          title: '上海南汇',
          key: 'QB-2',
          children: [
            { title: '空闲', key: 'QB-2-1', isLeaf: true },
            { title: '生产环境', key: 'QB-2-2', isLeaf: true },
            { title: '预发布环境', key: 'Qb-2-3', isLeaf: true }
          ]
        },
        {
          title: '华为云上海1',
          key: 'QB-3',
          children: [
            {title: '空闲', key: 'QB-3-1', isLeaf: true},
            {title: '生产环境', key: 'QB-3-2', isLeaf: true},
          ],
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      children: [
        { title: '空闲', key: 'QB-2-1', isLeaf: true },
        { title: '生产环境', key: 'QB-2-2', isLeaf: true },
        { title: '预发布环境', key: 'Qb-2-3', isLeaf: true }
      ]
    }
  ];

  ngOnInit(): void {
  }

  nzCheck(event: NzFormatEmitEvent): void {
    console.log(event);
  }
  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
  showListData(event: NzFormatEmitEvent): void {
    console.log(event, 'event');
  }

  showCreateDialog(): void {

  }
}
