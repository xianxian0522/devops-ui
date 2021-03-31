import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AppService} from '../../../share/services/app.service';
import {Subscription} from 'rxjs';
import {App, AppMember} from '../../../share/mode/app';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';
import {BaseCommonEditComponent} from '../../../share/base-common-edit/base-common-edit.component';

@Component({
  selector: 'app-app-set-information',
  templateUrl: './app-set-information.component.html',
  styleUrls: ['./app-set-information.component.less']
})
export class AppSetInformationComponent extends BaseCommonEditComponent<any> implements OnInit, AfterViewInit {

  constructor(
    protected fb: FormBuilder,
    private appService: AppService,
    protected baseRepository: BaseRepository<any>,
    protected messageService: NzMessageService,
  ) {
    super(fb, baseRepository, messageService);
  }

  editForm = this.fb.group({
    Name: [],
    DisplayName: [],
    Comment: [],
  });
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
  // 从业务成员里面选择
  // OwnerID = new FormControl(null);
  id: number = this.appService.appId;
  userList: AppMember[] = [];
  // isAdvancedSettingShow = false;

  protected urlString = 'app';

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.baseRepository.queryAllListByAppId('member', this.id).subscribe(res => {
      this.userList = res;
    });

    super.ngAfterViewInit();

    // this.baseRepository.queryDetailsById(this.id, 'app').subscribe(res => {
    //   this.editForm.patchValue({...res});
    //
    //   if (res.Owner && res.Owner.ID) {
    //     this.OwnerID.setValue(res.Owner.ID);
    //   }
    //   if (res.InstanceTemplate) {
    //     if (res.InstanceTemplate.BindInfos && res.InstanceTemplate.BindInfos.length > 1) {
    //       (this.editInstanceForm.get('BindInfos') as FormArray).clear();
    //       const arr = res.InstanceTemplate.BindInfos;
    //       arr.forEach((item: any) => {
    //         const baseGroup = new FormGroup({});
    //         Object.keys(item).forEach(key => {
    //           baseGroup.addControl(key, new FormControl(null));
    //         });
    //         (this.editInstanceForm.get('BindInfos') as FormArray).push(baseGroup);
    //       });
    //     }
    //     if (res.InstanceTemplate.EnvVars && res.InstanceTemplate.EnvVars.length > 1) {
    //       (this.editInstanceForm.get('EnvVars') as FormArray).clear();
    //       const arr = res.InstanceTemplate.EnvVars;
    //       arr.forEach((item: any) => {
    //         const baseGroup = new FormGroup({});
    //         Object.keys(item).forEach(key => {
    //           baseGroup.addControl(key, new FormControl(null));
    //         });
    //         (this.editInstanceForm.get('EnvVars') as FormArray).push(baseGroup);
    //       });
    //     }
    //     this.editInstanceForm.patchValue({...res.InstanceTemplate});
    //   }
    // });
  }

  // onSubmitInstance(): void {
  //   const value = {InstanceTemplate: {...this.editInstanceForm.value}};
  //   this.baseRepository.updateDetailsById(this.id, value, 'app').subscribe(_ => {
  //     this.messageService.success('修改成功');
  //   }, err => {
  //     this.messageService.error(err.message);
  //   });
  // }
  // onSubmit(): void {
  //   const value = {...this.editForm.value};
  //   this.baseRepository.updateDetailsById(this.id, value, 'app').subscribe(res => {
  //     this.messageService.success('修改成功');
  //   }, err => {
  //     this.messageService.error(err.message);
  //   });
  // }
  onSubmitTransfer(): void {
    const userId = this.OwnerID.value;
    this.baseRepository.transferUserByAppId(this.id, userId).subscribe(res => {
      this.messageService.success('转交成功');
    }, err => {
      this.messageService.error(err.message);
    });
  }
  // advancedSetting(): void {
  //   this.isAdvancedSettingShow = !this.isAdvancedSettingShow;
  // }

}
