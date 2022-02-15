import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeHu from '@angular/common/locales/hu';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeHu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'hu-HU'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
