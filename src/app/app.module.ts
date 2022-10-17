import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxPopoverModule } from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxButtonModule,
    DxPopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
