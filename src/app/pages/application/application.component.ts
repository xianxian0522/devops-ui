import { Component, OnInit } from '@angular/core';
import {NzFormatEmitEvent} from 'ng-zorro-antd/tree';
import {ActivatedRoute} from '@angular/router';
import {AppService} from '../../share/services/app.service';
import {BaseRepository} from '../../share/services/base.repository';
import {App} from '../../share/mode/app';

@Component({
  selector: 'app-model',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private baseRepository: BaseRepository<App>,
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(params => {
    //   console.log(params);
    //   if (params && params.get('id')) {
    //     this.appService.appId = parseInt(params.get('id') as string, 10);
    //   }
    // });
    console.log(this.appService.appId);

    this.baseRepository.queryAppDetailsById(this.appService.appId).subscribe(res => {
      console.log(res);
    });
  }

}
