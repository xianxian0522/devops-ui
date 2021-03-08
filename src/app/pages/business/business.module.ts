import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [BusinessComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    NzLayoutModule,
    NzSelectModule,
    NzIconModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BusinessModule { }
