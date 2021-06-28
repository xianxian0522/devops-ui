import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {AppService} from '../../../share/services/app.service';
import {AppHost} from '../../../share/mode/app';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-app-rs-instance-edit',
  templateUrl: './app-rs-instance-edit.component.html',
  styleUrls: ['./app-rs-instance-edit.component.less']
})
export class AppRsInstanceEditComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private baseRepository: BaseRepository<any>,
    private appService: AppService,
    private modalRef: NzModalRef,
    private messageService: NzMessageService,
  ) { }

  @Input() data: any;
  @Input() mode!: string;
  @Input() rsId!: number;
  @Input() appId!: number;
  editForm = this.fb.group({
    ID: [],
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
    Name: ['', Validators.required],
    State: [],
    User: [],
    WorkDir: [],
  });

  hostList: AppHost[] = [];
  HostID = new FormControl(null, Validators.required);

  ngOnInit(): void {
    if (this.data) {
      if (this.data.BindInfos && this.data.BindInfos.length > 1) {
        (this.editForm.get('BindInfos') as FormArray).clear();
        const arr = this.data.BindInfos;
        arr.forEach((item: any) => {
          const baseGroup = new FormGroup({});
          Object.keys(item).forEach(key => {
            baseGroup.addControl(key, new FormControl(null));
          });
          (this.editForm.get('BindInfos') as FormArray).push(baseGroup);
        });
      }
      if (this.data.EnvVars && this.data.EnvVars.length > 1) {
        (this.editForm.get('EnvVars') as FormArray).clear();
        const arr = this.data.EnvVars;
        arr.forEach((item: any) => {
          const baseGroup = new FormGroup({});
          Object.keys(item).forEach(key => {
            baseGroup.addControl(key, new FormControl(null));
          });
          (this.editForm.get('EnvVars') as FormArray).push(baseGroup);
        });
      }
      this.editForm.patchValue({...this.data});
    }

    if (this.mode === 'created') {
      this.baseRepository.queryAllListByAppId('host', this.appId).subscribe(host => {
        this.hostList = host;
      });
    }
  }
  onCancel(): void {
    this.modalRef.close();
  }
  onSubmit(): void {
    const value = {...this.editForm.value};
    if (this.mode === 'created') {
      value.HostID = this.HostID.value;
    }
    (this.mode === 'created' ? this.baseRepository.addInstance(this.rsId, value) :
      this.baseRepository.update(value)).subscribe(_ => {
        this.messageService.success(this.mode === 'created' ? '新增成功' : '修改成功');
        this.modalRef.close(true);
    });
  }

}
