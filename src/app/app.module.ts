import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { NZMODULES } from './nz-modules';
import fa from '@angular/common/locales/fa';
import { NZ_I18N, fa_IR } from 'ng-zorro-antd/i18n';
import { HtmlSanitizerPipe } from './pipes/html-sanitizer.pipe';
import { DynamicHooksModule, HookParserEntry } from 'ngx-dynamic-hooks';
import { IconComponent } from './components/icon/icon.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(fa);
const componentParsers: Array<HookParserEntry> = [
  { component: IconComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HtmlSanitizerPipe,
    IconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [...NZMODULES],
    ReactiveFormsModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: fa_IR,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
