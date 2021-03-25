import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';


@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    AppLayoutRoutingModule
  ]
})
export class AppLayoutModule { }
