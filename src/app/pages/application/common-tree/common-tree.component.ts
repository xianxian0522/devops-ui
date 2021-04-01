import {Component, Input, OnInit} from '@angular/core';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-common-tree',
  templateUrl: './common-tree.component.html',
  styleUrls: ['./common-tree.component.less']
})
export class CommonTreeComponent implements OnInit {

  constructor(
    private baseRepository: BaseRepository<any>,
    private messageService: NzMessageService,
  ) { }

  @Input() nodesData!: NzTreeNodeOptions[];
  @Input() clusterId!: number;

  ngOnInit(): void {

  }

  isExpandedChildren(node: NzTreeNodeOptions): void {
    node.expanded = !node.expanded;
  }
  clusterBindLogicIdcEnv(node: NzTreeNodeOptions): void {
    const key = node.key;
    const logicIdcEnvId = parseInt(key.split('-')[0], 10);
    (node.selected ? this.baseRepository.clusterBindLogicIdcEnv(this.clusterId, logicIdcEnvId) :
      this.baseRepository.deleteClusterBindLogicIdcEnv(this.clusterId, logicIdcEnvId)
    ).subscribe(res => {
      this.messageService.success( node.selected ? '集群成功绑定到逻辑机房' : '集群成功解除绑定逻辑机房');
    });
  }
}
