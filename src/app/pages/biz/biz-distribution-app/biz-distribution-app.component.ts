import {Component, Input, OnInit} from '@angular/core';
import {BaseRepository} from '../../../share/services/base.repository';
import {BizApp} from '../../../share/mode/biz';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-biz-distribution-app',
  templateUrl: './biz-distribution-app.component.html',
  styleUrls: ['./biz-distribution-app.component.less']
})
export class BizDistributionAppComponent implements OnInit {

  constructor(
    private baseRepository: BaseRepository<BizApp>,
    private messageService: NzMessageService,
    private modalRef: NzModalRef,
  ) { }

  @Input() bizId!: number;
  @Input() appsIds: number[] = [];
  appsList: BizApp[] = [];

  ngOnInit(): void {
    this.baseRepository.queryAllListByBizId('app', this.bizId).subscribe(apps => {
      this.appsList = apps;
    });
  }

  distributionApp(): void {
  }
  distributionAppCancel(): void {
    this.modalRef.close();
  }
}
