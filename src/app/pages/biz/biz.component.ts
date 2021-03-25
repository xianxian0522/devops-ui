import {AfterViewInit, Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {BaseRepository} from '../../share/services/base.repository';
import {merge, Subscription} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import {Biz} from '../../share/mode/biz';
import {BizService} from '../../share/services/biz.service';
import {LayoutComponent} from '../../share/layout/layout.component';
import {BizApp} from '../../share/mode/biz';

@Component({
  selector: 'app-business',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.less']
})
export class BizComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private baseRepository: BaseRepository<BizApp>,
    private fb: FormBuilder,
    private bizService: BizService,
  ) { }

  listOfData: BizApp[] = [];
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  isResultLoading = false;
  @Output() refresh = new EventEmitter();
  searchForm = this.fb.group({
    Name: [],
  });
  bizId: number = this.bizService.selectedValue.value;
  refreshSubscription!: Subscription;
  unSubscribe!: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // const  bizId = parseInt(localStorage.getItem('bizID') as string, 10);
    // const bizId = this.bizService.selectedValue.value;
    // console.log(bizId, 'v');
    this.refreshSubscription = this.bizService.selectedValue.valueChanges.subscribe(value => {
      this.bizId = value;
      this.bizService.refresh.emit();
    });

    this.unSubscribe = merge(this.bizService.refresh, this.searchForm.valueChanges).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        const value = {...this.searchForm.value};
        return this.baseRepository.queryAllListByBizId('app', this.bizId, value);
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      this.listOfData = res;
    });

    this.bizService.refresh.emit();
  }

  ngOnDestroy(): void {
    this.refreshSubscription.unsubscribe();
    this.unSubscribe.unsubscribe();
  }

}
