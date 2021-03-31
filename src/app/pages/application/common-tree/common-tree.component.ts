import {Component, Input, OnInit} from '@angular/core';
import {NzTreeNodeOptions} from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-common-tree',
  templateUrl: './common-tree.component.html',
  styleUrls: ['./common-tree.component.less']
})
export class CommonTreeComponent implements OnInit {

  constructor() { }

  @Input() nodesData!: NzTreeNodeOptions[];
  @Input() clusterId!: number;

  ngOnInit(): void {
    console.log(this.clusterId);
  }

  isExpandedChildren(node: NzTreeNodeOptions): void {
    node.expanded = !node.expanded;
  }
  clusterBindLogicIdcEnv(node: NzTreeNodeOptions): void {
    console.log(node, this.clusterId);
  }
}
