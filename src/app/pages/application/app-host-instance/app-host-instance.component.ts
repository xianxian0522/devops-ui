import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BaseCommonComponent} from '../../../share/base-common/base-common.component';
import {BaseRepository} from '../../../share/services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';
import {AppService} from '../../../share/services/app.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {merge, Subscription} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/operators';
import {AppInstance} from '../../../share/mode/app';

@Component({
  selector: 'app-app-host-instance',
  templateUrl: './app-host-instance.component.html',
  styleUrls: ['./app-host-instance.component.less']
})
export class AppHostInstanceComponent extends BaseCommonComponent<AppInstance> implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    protected baseRepository: BaseRepository<AppInstance>,
    protected messageService: NzMessageService,
    protected appService: AppService,
    protected fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) {
    super(baseRepository, messageService);
  }

  appId: number = parseInt(this.activatedRoute.snapshot.params.appId, 10);
  searchForm = this.fb.group({
    Name: [],
  });
  hostId = 0;
  isResultLoading = false;
  onSubscribe!: Subscription;

  protected urlFragment = 'app';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params && params.get('hostId')) {
        this.hostId = parseInt(params.get('hostId') as string, 10);
      }
    });
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.onSubscribe = merge(this.refresh).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        return this.baseRepository.queryAppHostInstance(this.appId, this.hostId);
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
