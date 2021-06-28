import {Component, OnInit, ViewChild} from '@angular/core';
import {Menu, MenuItem} from '../menu';
import {ActivatedRoute, Router} from '@angular/router';
import {BizService} from '../services/biz.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {BizComponent} from '../../pages/biz/biz.component';
import {Biz} from '../mode/biz';
import {Location} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-biz-layout',
  templateUrl: './biz-layout.component.html',
  styleUrls: ['./biz-layout.component.less']
})
export class BizLayoutComponent implements OnInit {

  constructor(
    private menu: Menu,
    private router: Router,
    public bizService: BizService,
    private location: Location,
    protected activatedRoute: ActivatedRoute,
  ) { }

  sectionItem: MenuItem[] = [];
  selectBizList: Biz[] = [];
  // selectedValue = this.bizService.selectedValue;
  selectUrl = 'index';

  ngOnInit(): void {
    const url = this.location.path();
    this.getUrlPath(url);

    this.location.onUrlChange(r => {
      this.getUrlPath(r);
    });

    this.activatedRoute.queryParams.subscribe(params => {
      const id = parseInt(params?.bizId, 10) || 0;
      this.bizService.selectedValue.setValue(id);
    });

    // this.bizService.getSelectBizList();
    this.bizService.getSelectBizList().pipe(switchMap(res => {
      if (res && res.length > 0 && this.bizService.selectedValue.value === 0) {
        this.bizService.selectedValue.setValue(res[0].ID);
      }
      // this.bizService.selectBizList = of(res);
      this.bizService.selectBizList.setValue(res);
      this.selectBizList = res;
      return of([]);
    })).subscribe(res => {
    });

    this.sectionItem = this.menu.getItems('biz');
  }

  getUrlPath(url: string): void {
    const urls = url?.split('/');
    this.selectUrl = urls?.[2]?.split('?')[0];
  }

}
