import {AfterViewInit, Component, OnDestroy, OnInit, EventEmitter} from '@angular/core';
import {AppService} from '../services/app.service';
import {BaseRepository} from '../services/base.repository';
import {FormGroup} from '@angular/forms';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {BaseCommonComponent} from './base-common.component';

@Component({
  selector: 'app-app-base-common',
  template: '',
})
export abstract class AppBaseCommonComponent<MODEL extends {ID?: number}> extends
  BaseCommonComponent<MODEL> implements AfterViewInit, OnDestroy {
  protected constructor(
    protected appService: AppService,
    protected baseRepository: BaseRepository<MODEL>,
  ) {
    super();
  }

  isResultLoading = false;
  appId: number = this.appService.appId;
  onSubscribe!: Subscription;
  refresh = new EventEmitter();

  protected abstract urlString: string;

  ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.onSubscribe = merge(this.refresh).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        return this.baseRepository.queryAllListByAppId(this.urlString, this.appId);
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      this.listOfData = res;
      this.resourceData = res;
    });

    this.refresh.emit();
  }

  ngOnDestroy(): void {
    this.onSubscribe.unsubscribe();
  }

}
