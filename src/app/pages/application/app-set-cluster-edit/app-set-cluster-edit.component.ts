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
  isTransferShow = false;
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

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
    });
  }

  onSubmit(): void {

  }
  onSubmitInstance(): void {

  }
  advancedSetting(): void {
    this.isTransferShow = !this.isTransferShow;
  }
}
