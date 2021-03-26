import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BizRoutingModule } from './biz-routing.module';
import { BizComponent } from './biz.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { BizMembersComponent } from './biz-members/biz-members.component';
import { BizSetInformationComponent } from './biz-set-information/biz-set-information.component';
import { BizSetAppComponent } from './biz-set-app/biz-set-app.component';
import { BizHostDetailsComponent } from './biz-host-details/biz-host-details.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzMessageModule} from 'ng-zorro-antd/message';
import { BizMemberEditComponent } from './biz-member-edit/biz-member-edit.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDividerModule} from 'ng-zorro-antd/divider';


@NgModule({
  declarations: [
    BizComponent,
    BizMembersComponent,
    BizSetInformationComponent,
    BizSetAppComponent,
    BizHostDetailsComponent,
    BizMemberEditComponent
  ],
  imports: [
    CommonModule,
    BizRoutingModule,
    NzLayoutModule,
    NzSelectModule,
    NzIconModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    NzTreeModule,
    NzInputModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzMessageModule,
    NzModalModule,
    NzDividerModule,
  ]
})
export class BizModule { }
