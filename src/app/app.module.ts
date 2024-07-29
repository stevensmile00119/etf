import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { EtfApiComponent } from './etf-api/etf-api.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, RxjsPageComponent, EtfApiComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCardModule,
    HttpClientModule,
    MatTableModule,
    NzTableModule,
    FormsModule,
  ],
  exports: [NzCardModule],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
