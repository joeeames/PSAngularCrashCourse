import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import Routes from './routes';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { NewWeightEntryComponent } from './new-weight-entry/new-weight-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryDetailsComponent,
    NewWeightEntryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
