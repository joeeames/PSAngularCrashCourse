import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../settings.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'hm-basic-settings',
  templateUrl: './basic-settings.component.html',
  styleUrls: ['./basic-settings.component.css']
})
export class BasicSettingsComponent implements OnInit {
  settingsForm = new FormGroup({
    trackBodyFat: new FormControl(false)
  });

  constructor(private settingsSvc: SettingsService,
    private router: Router ) { }

  ngOnInit() {
    this.settingsSvc.getSettings()
    this.settingsSvc.settings$
      .subscribe(settings => {
        this.settingsForm.controls.trackBodyFat.setValue(settings.trackBodyFat);
      })
  }

  onSubmit() {
    this.settingsSvc.updateSettings(this.settingsForm.value)
    .subscribe(() => {
      this.goHome();
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
