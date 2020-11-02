import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appComponent } from './app.component';
import { MaterialModule } from 'MaterialModule';

@NgModule({
  declarations: [
    appComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule { }
