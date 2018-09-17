import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicSettingsComponent } from './basic-settings/basic-settings.component';

const routes: Routes = [
  {path: 'basic', component: BasicSettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicSettingsComponent]
})
export class SettingsModule { }
