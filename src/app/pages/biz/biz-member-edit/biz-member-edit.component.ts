import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {FormBuilder, Validators} from '@angular/forms';
import {BaseRepository} from '../../../share/services/base.repository';
import {User} from '../../../share/mode/biz';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-biz-member-edit',
  templateUrl: './biz-member-edit.component.html',
  styleUrls: ['./biz-member-edit.component.less']
})
export class BizMemberEditComponent implements OnInit {

  constructor(
    private modalRef: NzModalRef,
    private fb: FormBuilder,
    private baseRepository: BaseRepository<any>,
    private messageService: NzMessageService,
  ) { }

  @Input() data: any;
  @Input() mode!: string;
  @Input() bizId!: number;
  editForm = this.fb.group({
    Role: ['', Validators.required],
    UserID: ['', Validators.required],
  });
  userList: User[] = [];

  ngOnInit(): void {
    this.editForm.patchValue({...this.data});

    this.baseRepository.queryAll('users').subscribe(res => {
      this.userList = res;
    });
  }

  onCancel(): void {
    this.modalRef.close();
  }
  onSubmit(): void {
    const value = {...this.editForm.value};
    this.baseRepository.updateOrAdd(this.bizId, value).subscribe(_ => {
      this.messageService.success(this.mode === 'edit' ? '修改成功' : '新增成功');
      this.modalRef.close(true);
    }, err => {
      this.messageService.error(err.message);
    });
  }

}
