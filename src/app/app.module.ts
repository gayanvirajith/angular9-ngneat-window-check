import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogModule } from '@ngneat/dialog';

import { AppComponent } from './app.component';
import { WindowModelComponent } from './window-model/window-model.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowModelComponent
  ],
  imports: [
    BrowserModule,
    DialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
