import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eventType } from '../../interfaces/event.interface';

@Component({
  selector: 'event-register',
  templateUrl: './event-register.page.html',
  styleUrls: ['./event-register.page.scss'],
})
export class EventRegisterPage implements OnInit {
  eventFrm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {}

  initiFrom() {
    this.eventFrm = this.fb.group({
      id: [],
      title: [,Validators.required],
      description: [,Validators.required],
      eventType: [,Validators.required],
      eventDate: [,Validators.required],
      allowTicket: [,Validators.required],
      tickets: [],
    });
  }

  createEvent() {
      if(this.eventFrm.invalid) {
          return false;
      }

      if(!Object.values(eventType).includes(this.eventFrm.get('eventType').value) ) {
        return false;
      }

      const actualDate = new Date();
      const eventDate = new Date(this.eventFrm.get('eventDate').value);
      console.log(actualDate.getTime())
      console.log(eventDate.getTime())
      if(actualDate.getTime() > eventDate.getTime()) {
          return false;
      }

  }
}
