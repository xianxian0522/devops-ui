import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzInputModule} from 'ng-zorro-antd/input';
import { AppHostDetailsComponent } from './app-host-details/app-host-details.component';
import { AppMembersComponent } from './app-members/app-members.component';
import { AppSetInformationComponent } from './app-set-information/app-set-information.component';
import { AppSetClusterComponent } from './app-set-cluster/app-set-cluster.component';
import { AppSetClusterEditComponent } from './app-set-cluster-edit/app-set-cluster-edit.component';
import { AppClusterInstanceComponent } from './app-cluster-instance/app-cluster-instance.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzMessageModule} from 'ng-zorro-antd/message';
import { CommonFormComponent } from './common-form/common-form.component';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { CommonTreeComponent } from './common-tree/common-tree.component';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { AppRsInstanceEditComponent } from './app-rs-instance-edit/app-rs-instance-edit.component';
import {NzTagModule} from 'ng-zorro-antd/tag';
import { AppHostInstanceComponent } from './app-host-instance/app-host-instance.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    AppHostDetailsComponent,
    AppMembersComponent,
    AppSetInformationComponent,
    AppSetClusterComponent,
    AppSetClusterEditComponent,
    AppClusterInstanceComponent,
    CommonFormComponent,
    CommonTreeComponent,
    AppRsInstanceEditComponent,
    AppHostInstanceComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzSelectModule,
    NzIconModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzTreeModule,
    NzTableModule,
    NzInputModule,
    NzFormModule,
    NzBreadCrumbModule,
    NzPopconfirmModule,
    NzModalModule,
    NzMessageModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzTagModule,
  ]
})
export class ApplicationModule { }
