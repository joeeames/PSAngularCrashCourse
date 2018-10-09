import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicSettingsComponent } from './basic-settings/basic-settings.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', 
    component: BasicSettingsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasicSettingsComponent],
})
export class SettingsModule { }
