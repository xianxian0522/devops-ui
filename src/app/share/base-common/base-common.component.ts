import {AfterViewInit, Component, EventEmitter} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {BaseRepository} from '../services/base.repository';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-base-common',
  template: ''
})
export abstract class BaseCommonComponent<MODEL> implements AfterViewInit {
  protected constructor(
    protected baseRepository: BaseRepository<MODEL>,
    protected messageService: NzMessageService,
  ) {
  }

  listOfData: MODEL[] = [];
  resourceData: MODEL[] = [];
  searchForm!: FormGroup;
  refresh = new EventEmitter();

  protected abstract urlFragment: string;

  deleteMember(id: number): void {
    this.baseRepository.deleteMemberById(id, this.urlFragment).subscribe(_ => {
      this.refresh.emit();
      this.messageService.success('删除成功');
    });
  }
  onCancel(): void {
    this.messageService.info('取消删除');
  }

  ngAfterViewInit(): void {
    this.searchForm.valueChanges.pipe(
      debounceTime(200),
    ).subscribe(value => {
      const valueFilter = Object.keys(value).filter(key => !!value[key]);
      let data = this.resourceData || [];
      if (valueFilter.length > 0 && data.length > 0) {
        valueFilter.forEach(v => {
          // this.listOfData = data.filter((d: any) => d[v] === value[v]);
          this.listOfData = data.filter((d: any) => {
            if (d.hasOwnProperty(v)) {
              // return d[v].indexOf(value[v]) !== -1;
              return d[v] === value[v];
            } else {
              return true;
            }
          });
          data = this.listOfData;
        });
      } else {
        this.listOfData = data;
      }
    });
  }
}
