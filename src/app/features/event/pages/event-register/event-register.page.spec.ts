import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventRegisterPage } from './event-register.page';


describe('EventRegisterPage', () => {
  let component: EventRegisterPage;
  let fixture: ComponentFixture<EventRegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegisterPage ],
      imports: [IonicModule.forRoot(),ReactiveFormsModule, ],
      providers:[FormBuilder],
    //   schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(EventRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', ()=>{
      component.initiFrom();
      expect(component.eventFrm.controls.id).toBeTruthy();
  })

});
