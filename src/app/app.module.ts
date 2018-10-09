import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes } from './routes';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { NewWeightEntryComponent } from './new-weight-entry/new-weight-entry.component';
import { ConfirmModalComponent } from './common/confirm-modal/confirm-modal.component';
import { EntryListComponent } from './common/entry-list/entry-list.component';
import { LoginComponent } from './login/login.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { CommunityComponent } from './community/community.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllEntriesComponent,
    NewWeightEntryComponent,
    ConfirmModalComponent,
    EntryListComponent,
    LoginComponent,
    EntryDetailsComponent,
    CommunityComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
