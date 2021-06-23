import {Component, OnInit, ViewChild} from '@angular/core';
import {Menu, MenuItem} from '../menu';
import {Router} from '@angular/router';
import {BizService} from '../services/biz.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {BizComponent} from '../../pages/biz/biz.component';
import {Biz} from '../mode/biz';

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
  ) { }

  sectionItem: MenuItem[] = [];
  selectBizList: Biz[] = [];

  ngOnInit(): void {
    // this.bizService.getSelectBizList();
    this.bizService.getSelectBizList().pipe(switchMap(res => {
      if (res && res.length > 0) {
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

}
