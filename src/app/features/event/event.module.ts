import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventFeatureRoutingModule } from './event-routing.module';
import { EventRegisterPage } from './pages/event-register/event-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventFeatureRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventRegisterPage
  ]
})
export class EventFeatureModule {}
