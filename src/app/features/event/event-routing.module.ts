import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventRegisterPage } from './pages/event-register/event-register.page';

const routes: Routes = [
  {
    path: 'register',
    component: EventRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventFeatureRoutingModule {}
