import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BaseRepository} from '../services/base.repository';
import {App} from '../mode/app';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-base-common-edit',
  template: '',
})
export abstract class BaseCommonEditComponent<MODEL extends {ID?: number}> implements OnInit, AfterViewInit {
  protected constructor(
    protected fb: FormBuilder,
    protected baseRepository: BaseRepository<any>,
    protected messageService: NzMessageService,
  ) {
  }

  editForm!: FormGroup;
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
  OwnerID = new FormControl(null);
  isAdvancedSettingShow = false;
  id = 0;

  protected abstract urlString: string;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.baseRepository.queryDetailsById(this.id, this.urlString).subscribe(res => {
      this.editForm.patchValue({...res});

      if (res.Owner && res.Owner.ID) {
        this.OwnerID.setValue(res.Owner.ID);
      }
      if (res.InstanceTemplate) {
        if (res.InstanceTemplate.BindInfos && res.InstanceTemplate.BindInfos.length > 1) {
          (this.editInstanceForm.get('BindInfos') as FormArray).clear();
          const arr = res.InstanceTemplate.BindInfos;
          arr.forEach((item: any) => {
            const baseGroup = new FormGroup({});
            Object.keys(item).forEach(key => {
              baseGroup.addControl(key, new FormControl(null));
            });
            (this.editInstanceForm.get('BindInfos') as FormArray).push(baseGroup);
          });
        }
        if (res.InstanceTemplate.EnvVars && res.InstanceTemplate.EnvVars.length > 1) {
          (this.editInstanceForm.get('EnvVars') as FormArray).clear();
          const arr = res.InstanceTemplate.EnvVars;
          arr.forEach((item: any) => {
            const baseGroup = new FormGroup({});
            Object.keys(item).forEach(key => {
              baseGroup.addControl(key, new FormControl(null));
            });
            (this.editInstanceForm.get('EnvVars') as FormArray).push(baseGroup);
          });
        }
        this.editInstanceForm.patchValue({...res.InstanceTemplate});
      }
    });
  }

  onSubmitInstance(): void {
    const value = {InstanceTemplate: {...this.editInstanceForm.value}};
    this.baseRepository.updateDetailsById(this.id, value, this.urlString).subscribe(_ => {
      this.messageService.success('修改成功');
    }, err => {
      this.messageService.error(err.message);
    });
  }
  onSubmit(): void {
    const value = {...this.editForm.value};
    this.baseRepository.updateDetailsById(this.id, value, this.urlString).subscribe(res => {
      this.messageService.success('修改成功');
    }, err => {
      this.messageService.error(err.message);
    });
  }
  advancedSetting(): void {
    this.isAdvancedSettingShow = !this.isAdvancedSettingShow;
  }
}
