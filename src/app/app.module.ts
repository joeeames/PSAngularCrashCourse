import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewWeightEntryComponent } from './new-weight-entry/new-weight-entry.component';
import { ConfirmModalComponent } from './common/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewWeightEntryComponent,
    ConfirmModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
