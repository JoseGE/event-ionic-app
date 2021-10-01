import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'event-register',
  templateUrl: './event-register.page.html',
  styleUrls: ['./event-register.page.scss'],
})
export class EventRegisterPage implements OnInit {
  eventFrm: FormGroup;
  constructor(private fb: FormBuilder) {
      this.initiFrom();
  }

  ngOnInit() {}

  initiFrom() {
    this.eventFrm = this.fb.group({
      id: [],
      title: [],
      description: [],
      eventType: [],
      eventDate: [],
      allowTicket: [],
      tickets: [],
    });
  }
}
