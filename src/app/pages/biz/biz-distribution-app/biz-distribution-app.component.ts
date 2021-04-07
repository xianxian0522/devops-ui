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
  @Input() hostId!: number;
  oldAppsIds: number[] = [];
  appsList: BizApp[] = [];

  ngOnInit(): void {
    this.oldAppsIds = this.appsIds;
    this.baseRepository.queryAllListByBizId('app', this.bizId).subscribe(apps => {
      this.appsList = apps;
    });
  }

  distributionApp(): void {
    const value = this.appsIds;
    this.oldAppsIds.map(oldAppId => {
      if (!value.includes(oldAppId)) {
        this.baseRepository.deleteDistributionHostToApp(this.bizId, oldAppId, this.hostId).subscribe(_ => {
          this.modalRef.close(true);
        });
      }
    });
    value.map(appId => {
      if (!this.oldAppsIds.includes(appId)) {
        this.baseRepository.distributionHostToApp(this.bizId, appId, this.hostId).subscribe(_ => {
          this.modalRef.close(true);
        });
      }
    });
  }
  distributionAppCancel(): void {
    this.modalRef.close();
  }
}
