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


@NgModule({
  declarations: [BizComponent],
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
  ]
})
export class BizModule { }
