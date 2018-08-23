import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './dynamic-form/dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
