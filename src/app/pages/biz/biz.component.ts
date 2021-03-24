import {AfterViewInit, Component, OnInit, Output, EventEmitter} from '@angular/core';
import {BaseRepository} from '../../share/services/base.repository';
import {merge} from 'rxjs';
import {FormBuilder} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-business',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.less']
})
export class BizComponent implements OnInit, AfterViewInit {

  constructor(
    private baseRepository: BaseRepository<any>,
    private fb: FormBuilder,
  ) { }

  listOfData = [
    {
      name: 'qb-server',
      displayName: 'QB后端服务',
      level: 'P0',
    }
  ];
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  isResultLoading = false;
  @Output() refresh = new EventEmitter();
  searchForm = this.fb.group({
    name: [],
  });

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    merge(this.refresh, this.searchForm.valueChanges).pipe(
      debounceTime(200),
      switchMap(_ => {
        this.isResultLoading = true;
        return this.baseRepository.queryAll();
      })
    ).subscribe(res => {
      this.isResultLoading = false;
      // this.listOfData = res;
    });

    this.refresh.emit();
  }

}
