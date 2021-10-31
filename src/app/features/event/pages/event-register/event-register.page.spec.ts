import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventRegisterPage } from './event-register.page';
/**
 * Test cases
 * 1. El formulario debe ser creado
 * 2. El formulario debe contenter los valores requeridos
 * 3.
 */

describe('EventRegisterPage', () => {
  let component: EventRegisterPage;
  let fixture: ComponentFixture<EventRegisterPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventRegisterPage],
        imports: [IonicModule.forRoot(), ReactiveFormsModule],
        providers: [FormBuilder],
        //   schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      fixture = TestBed.createComponent(EventRegisterPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    component.initiFrom();
    expect(component.eventFrm.controls.id).toBeTruthy();
  });

  it('should return false if form invalid', () => {
    component.initiFrom();
    const result = component.createEvent();

    expect(result).toBeFalse();
  });

  it('should eventype be an item of enum', () => {
    component.initiFrom();
    component.eventFrm.get('eventType').setValue(1);
    component.eventFrm.get('title').setValue(1);
    component.eventFrm.get('description').setValue(1);
    component.eventFrm.get('eventDate').setValue(1);
    component.eventFrm.get('allowTicket').setValue(false);
    const result = component.createEvent();
    expect(result).toBeFalse();
  });
  it('should evenDate be date > now', () => {
    component.initiFrom();
    component.eventFrm.get('eventType').setValue('PRIV');
    component.eventFrm.get('title').setValue(1);
    component.eventFrm.get('description').setValue(1);
    component.eventFrm.get('eventDate').setValue('09-30-2021');
    component.eventFrm.get('allowTicket').setValue(false);
    const result = component.createEvent();
    expect(result).toBeFalse();
  });
});
