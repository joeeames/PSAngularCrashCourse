import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  @Output() yes = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  yesHandler() {
    this.yes.emit();
  }

}
