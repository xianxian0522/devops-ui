import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AppBaseCommonComponent} from '../../../share/base-common/app-base-common.component';
import {AppHost} from '../../../share/mode/app';
import {AppService} from '../../../share/services/app.service';
import {BaseRepository} from '../../../share/services/base.repository';

@Component({
  selector: 'app-app-host-details',
  templateUrl: './app-host-details.component.html',
  styleUrls: ['./app-host-details.component.less']
})
export class AppHostDetailsComponent extends AppBaseCommonComponent<AppHost> implements OnInit {

  constructor(
    private fb: FormBuilder,
    protected appService: AppService,
    protected baseRepository: BaseRepository<AppHost>,
  ) {
    super(appService, baseRepository);
  }

  protected urlString = 'host';
  searchForm = this.fb.group({
    Hostname: [],
    InnerIP: [],
  });

  ngOnInit(): void {
  }

}
