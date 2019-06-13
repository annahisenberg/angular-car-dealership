import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { CarListComponent } from './components/car-list/car-list.component';

// TODO: import any modules that will be used in the app

@NgModule({
  declarations: [AppComponent, InputFormComponent, CarListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
