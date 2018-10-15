import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', 
        component: SettingsComponent,
      }
    ])
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
