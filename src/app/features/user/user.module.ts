import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFeatureRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserFeatureRoutingModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class UserFeatureModule {}
