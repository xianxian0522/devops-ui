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

  name = '';
  displayName = '';
  comment = '';
  appId = parseInt(this.activatedRoute.snapshot.params.appId, 10);

  ngOnInit(): void {

    this.baseRepository.queryDetailsById(this.appId, 'app').subscribe(res => {
      this.name = res.Name;
      this.displayName = res.DisplayName;
      this.comment = res.Comment;
    });
  }

}
