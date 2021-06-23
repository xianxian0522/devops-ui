import {AfterViewInit, Component, Directive, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BizService} from '../services/biz.service';
import {merge, of, Subscription} from 'rxjs';
import {debounceTime, map, switchMap} from 'rxjs/operators';
import {BaseRepository} from '../services/base.repository';
import {BaseCommonComponent} from './base-common.component';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Biz} from '../mode/biz';

@Component({
  selector: 'app-biz-base-common',
  template: '',
})
export abstract class BizBaseCommonComponent<MODEL extends {ID?: number}> extends BaseCommonComponent<MODEL>
  implements OnInit, AfterViewInit, OnDestroy{

  protected constructor(
    protected bizService: BizService,
    protected baseRepository: BaseRepository<MODEL>,
    protected messageService: NzMessageService,
  ) {
    super(baseRepository, messageService);
  }

  // listOfData: MODEL[] = [];
  // resourceData: MODEL[] = [];
  isResultLoading = false;
  // searchForm!: FormGroup;
  bizId: number = this.bizService.selectedValue.value;
  onSubscribe!: Subscription;
  bizName = ' ';
  bizDisplayName = ' ';
  bizInfoSubscribe!: Subscription;

  protected abstract urlString: string;
  protected urlFragment = 'biz';

  ngOnInit(): void {

  }
  filterBizInfo(value: number): void {
    const data = this.bizService.selectBizList.value.filter((k: Biz) => k.ID === value);
    if (data && data.length > 0) {
      this.bizName = data[0].Name;
      this.bizDisplayName = data[0].DisplayName;
    }
    // this.bizService.selectBizList.subscribe(list => {
    //   console.log(list, ';;;;;');
    //   const data = list.filter((k: Biz) => k.ID === value);
    //   if (data && data.length > 0) {
    //     this.bizName = data[0].Name;
    //     this.bizDisplayName = data[0].DisplayName;
    //   }
    // });
  }
  ngAfterViewInit(): void {
    this.bizInfoSubscribe = this.bizService.selectedValue.valueChanges.subscribe(value => {
      this.bizId = value;
      this.bizService.refresh.emit();
      this.searchForm.reset();
      this.filterBizInfo(value);
    });

    super.ngAfterViewInit();

    // this.searchForm.valueChanges.pipe(
    //   debounceTime(200),
    // ).subscribe(value => {
    //   const valueFilter = Object.keys(value).filter(key => !!value[key]);
    //   let data = this.resourceData || [];
    //   if (valueFilter.length > 0 && data.length > 0) {
    //     valueFilter.forEach(v => {
    //       // this.listOfData = data.filter((d: any) => d[v] === value[v]);
    //       this.listOfData = data.filter((d: any) => {
    //         if (d.hasOwnProperty(v)) {
    //           // return d[v].indexOf(value[v]) !== -1;
    //           return d[v] === value[v];
    //         } else {
    //           return true;
    //         }
    //       });
    //       data = this.listOfData;
    //     });
    //   } else {
    //     this.listOfData = data;
    //   }
    // });

    this.onSubscribe = merge(this.bizService.refresh, this.refresh).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        const value = {...this.searchForm.value};
        return this.baseRepository.queryAllListByBizId(this.urlString, this.bizId, value);
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      this.listOfData = res;
      this.resourceData = res;
    });

    this.bizService.refresh.emit();
  }
  ngOnDestroy(): void {
    this.onSubscribe.unsubscribe();
    this.bizInfoSubscribe.unsubscribe();
  }
}
