import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { BasicSettingsComponent } from './settings/basic-settings/basic-settings.component';

export const Routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: BasicSettingsComponent },
  { path: 'community', loadChildren: './community/community.module#CommunityModule' },
  { path: 'entries', component: EntryDetailsComponent },
]
