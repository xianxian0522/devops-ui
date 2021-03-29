import {AfterViewInit, Component} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-base-common',
  template: ''
})
export abstract class BaseCommonComponent<MODEL> implements AfterViewInit {
  protected constructor() {
  }

  listOfData: MODEL[] = [];
  resourceData: MODEL[] = [];
  searchForm!: FormGroup;

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
