import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-app-set-cluster-edit',
  templateUrl: './app-set-cluster-edit.component.html',
  styleUrls: ['./app-set-cluster-edit.component.less']
})
export class AppSetClusterEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  editForm = this.fb.group({
    Comment: [],
    Name: [],
  });
  isAdvancedSettingShow = false;
  editInstanceForm = this.fb.group({
    BindInfos: this.fb.array([
      this.fb.group({
        Ip: [],
        Name: [],
        Port: [],
        Protocol: []
      })
    ]),
    EnvVars: this.fb.array([
      this.fb.group({
        Name: [],
        Value: [],
      })
    ]),
    Comment: [],
    DataDir: [],
    LogDir: [],
    MetricEndpoint: [],
    Name: [],
    State: [],
    User: [],
    WorkDir: [],
  });
  id!: number;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params && params.get('clusterId')) {
        this.id = parseInt(params.get('clusterId') as string, 10);
      }
    });
  }

  onSubmit(): void {

  }
  onSubmitInstance(): void {

  }
  advancedSetting(): void {
    this.isAdvancedSettingShow = !this.isAdvancedSettingShow;
  }
}
