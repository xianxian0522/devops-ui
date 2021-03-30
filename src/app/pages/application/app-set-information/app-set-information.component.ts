import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {AppService} from '../../../share/services/app.service';
import {Subscription} from 'rxjs';
import {AppMember} from '../../../share/mode/app';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-app-set-information',
  templateUrl: './app-set-information.component.html',
  styleUrls: ['./app-set-information.component.less']
})
export class AppSetInformationComponent implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private baseRepository: BaseRepository<any>,
    private messageService: NzMessageService,
  ) { }

  editForm = this.fb.group({
    Name: [],
    DisplayName: [],
    Comment: [],
  });
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
  // 从业务成员里面选择
  OwnerID = new FormControl(null);
  appId: number = this.appService.appId;
  userList: AppMember[] = [];
  isTransferShow = false;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.baseRepository.queryAllListByAppId('member', this.appId).subscribe(res => {
      this.userList = res;
    });

    this.baseRepository.queryAppDetailsById(this.appId).subscribe(res => {
      this.editForm.patchValue({...res});

      if (res.Owner && res.Owner.ID) {
        this.OwnerID.setValue(res.Owner.ID);
      }
    });
  }

  onSubmit(): void {
    const value = {...this.editForm.value};
    this.baseRepository.updateAppDetailsById(this.appId, value).subscribe(res => {
      this.messageService.success('修改成功');
    }, err => {
      this.messageService.error(err.message);
    });
  }
  onSubmitTransfer(): void {
    const userId = this.OwnerID.value;
    this.baseRepository.transferUserByAppId(this.appId, userId).subscribe(res => {
      this.messageService.success('转交成功');
    }, err => {
      this.messageService.error(err.message);
    });
  }
  advancedSetting(): void {
    this.isTransferShow = !this.isTransferShow;
  }

}
