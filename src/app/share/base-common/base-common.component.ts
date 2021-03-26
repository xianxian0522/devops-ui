import {AfterViewInit, Component, Directive, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BizService} from '../services/biz.service';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BaseRepository} from '../services/base.repository';

@Component({
  selector: 'app-base-common',
  template: '',
})
export abstract class BaseCommonComponent<MODEL extends {ID?: number}> implements OnInit, AfterViewInit, OnDestroy{

  protected constructor(
    protected bizService: BizService,
    protected baseRepository: BaseRepository<MODEL>,
  ) {
  }

  listOfData: MODEL[] = [];
  isResultLoading = false;
  searchForm!: FormGroup;
  bizId: number = this.bizService.selectedValue.value;
  onSubscribe!: Subscription;

  protected abstract urlString: string;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.bizService.selectedValue.valueChanges.subscribe(value => {
      this.bizId = value;
      this.bizService.refresh.emit();
    });

    this.onSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        const value = {...this.searchForm.value};
        return this.baseRepository.queryAllListByBizId(this.urlString, this.bizId, value);
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      this.listOfData = res;
    });

    this.bizService.refresh.emit();
  }
  ngOnDestroy(): void {
    this.onSubscribe.unsubscribe();
  }
}
