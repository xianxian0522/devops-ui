import { Component, OnInit } from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.less']
})
export class BusinessComponent implements OnInit {

  constructor() { }

  searchValue = '';
  listOfData = [
    {id: 1, innerIp: '192.168.51.11', name: 'QBServer', house: '上海南汇', dev: '生产'},
    {id: 2, innerIp: '192.168.51.12', name: 'QBServer', house: '上海南汇', dev: '生产'},
    {id: 3, innerIp: '192.168.51.13', name: 'QBServer', house: '上海南汇', dev: '生产'},
  ];

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
      isLeaf: true
    }
  ];

  ngOnInit(): void {
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  showListData(event: NzFormatEmitEvent): void {
    console.log(event, 'event');
  }
}
