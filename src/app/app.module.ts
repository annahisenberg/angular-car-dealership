import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './components/car/car.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

// TODO: import any modules that will be used in the app

@NgModule({
  declarations: [AppComponent, InputFormComponent, CarListComponent, CarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatButtonModule, MatCheckboxModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
