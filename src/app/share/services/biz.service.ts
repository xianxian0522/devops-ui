import {Injectable, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Biz} from '../mode/biz';
import {BaseRepository} from './base.repository';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BizService {
  constructor(
    private baseRepository: BaseRepository<Biz>,
  ) {}

  public refresh = new EventEmitter();

  public selectedValue = new FormControl(0);
  // selectBizList: Observable<Biz[]> = of<Biz[]>([]);
  selectBizList = new FormControl([]);

  getSelectBizList(): Observable<Biz[]> {
    return this.baseRepository.queryAll('biz');
    //   .subscribe(res => {
    //   if (res && res.length > 0) {
    //     this.selectedValue.setValue(res[0].ID);
    //   }
    //   this.selectBizList = res;
    //   localStorage.setItem('bizList', JSON.stringify(this.selectBizList));
    //
    //   console.log('=====????????', this.selectBizList);
    // });
  }

}
