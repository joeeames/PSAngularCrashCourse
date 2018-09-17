import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';


let Routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
]

export default Routes;