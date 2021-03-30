import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { MiddleComponent } from './pages/middle/middle.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import {AuthInterceptor} from './share/services/http-interceptors';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {RoutesGuardService} from './share/services/routesGuardService';
import {MemberEditComponent} from './pages/member-edit/member-edit.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzFormModule} from 'ng-zorro-antd/form';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiddleComponent,
    NotfoundComponent,
    MemberEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzMessageModule,
    NzSelectModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
  providers: [
    RoutesGuardService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
