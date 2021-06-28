import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {BizService} from '../../../share/services/biz.service';
import {BaseRepository} from '../../../share/services/base.repository';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BizDetails, BizMember} from '../../../share/mode/biz';
import {NzMessageService} from 'ng-zorro-antd/message';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-biz-set-information',
  templateUrl: './biz-set-information.component.html',
  styleUrls: ['./biz-set-information.component.less']
})
export class BizSetInformationComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private fb: FormBuilder,
    private bizService: BizService,
    private baseRepository: BaseRepository<any>,
    private messageService: NzMessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  editForm = this.fb.group({
    Name: [],
    DisplayName: [],
    Comment: [],
  });
  // 从业务成员里面选择
  OwnerID = new FormControl(null);
  bizId: number = this.bizService.selectedValue.value;
  userList: BizMember[] = [];
  isAdvancedSettingShow = false;
  onSubscribe!: Subscription;
  onSubscribeMem!: Subscription;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(query => {
      this.bizId = query?.bizId || 0;
    });
  }

  ngAfterViewInit(): void {
    this.bizService.selectedValue.valueChanges.subscribe(value => {
      this.bizId = value;
      this.bizService.refresh.emit();
    });

    this.onSubscribeMem = merge(this.bizService.refresh).pipe(
      debounceTime(200),
      switchMap(_ => {
        return this.baseRepository.queryAllListByBizId('member', this.bizId);
      })
    ).subscribe(res => {
      this.userList = res;
    });

    this.onSubscribe = merge(this.bizService.refresh).pipe(
      debounceTime(200),
      switchMap(_ => {
        return this.baseRepository.queryBizDetailsById(this.bizId);
      })
    ).subscribe(res => {
      this.editForm.patchValue({...res});

      if (res.Owner && res.Owner.ID) {
        this.OwnerID.setValue(res.Owner.ID);
      }
    });

    this.bizService.refresh.emit();
  }
  ngOnDestroy(): void {
    this.onSubscribe.unsubscribe();
    this.onSubscribeMem.unsubscribe();
  }

  onSubmit(): void {
    const value = {...this.editForm.value};
    this.baseRepository.updateBizDetailsById(this.bizId, value).subscribe(res => {
      this.messageService.success('修改成功');
      // this.bizService.refresh.emit();
    }, err => {
      this.messageService.error(err.message);
    });
  }
  onSubmitTransfer(): void {
    const userId = this.OwnerID.value;
    this.baseRepository.transferUserByBizId(this.bizId, userId).subscribe(res => {
      this.messageService.success('转交成功');
    }, err => {
      this.messageService.error(err.message);
    });
  }
  advancedSetting(): void {
    this.isAdvancedSettingShow = !this.isAdvancedSettingShow;
  }

}
