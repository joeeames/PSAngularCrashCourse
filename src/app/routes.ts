import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';


let Routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
  { path: 'entries', component: EntryDetailsComponent },
]

export default Routes;