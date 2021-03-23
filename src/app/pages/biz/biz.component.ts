import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BaseRepository} from '../../share/services/base.repository';

@Component({
  selector: 'app-business',
  templateUrl: './biz.component.html',
  styleUrls: ['./biz.component.less']
})
export class BizComponent implements OnInit, AfterViewInit {

  constructor(
    private baseRepository: BaseRepository<any>,
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

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.baseRepository.queryAll().subscribe(res => {
      console.log(res);
    });
  }

}
