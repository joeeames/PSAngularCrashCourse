import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllEntriesComponent } from './all-entries/all-entries.component';
import { LoginComponent } from './login/login.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { CommunityComponent } from './community/community.component';
import { CommunityGuard } from './community/community.guard';

export const Routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule'  },
  { 
    path: 'community', 
    canActivate: [CommunityGuard],
    component: CommunityComponent },
  { 
    path: 'entries', 
    component: AllEntriesComponent,
  },
  { 
    path: 'entries/:id', 
    component: EntryDetailsComponent,
  },
  { path: 'login', component: LoginComponent },
]
