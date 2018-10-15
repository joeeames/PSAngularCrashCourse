import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewWeightEntryComponent } from './new-weight-entry/new-weight-entry.component';
import { ConfirmModalComponent } from './common/confirm-modal/confirm-modal.component';
import { LoginComponent } from './login/login.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { CommunityComponent } from './community/community.component';
import { CommunityGuard } from './community/community.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewWeightEntryComponent,
    ConfirmModalComponent,
    LoginComponent,
    EntryDetailsComponent,
    CommunityComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'entries/:id', component: EntryDetailsComponent },
      { path: 'community', 
        component: CommunityComponent,
        canActivate: [CommunityGuard]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
