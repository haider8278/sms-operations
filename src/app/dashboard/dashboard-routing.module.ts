import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkordersComponent } from './workorders/workorders.component';

const routes: Routes = [
  {
    path: 'work-orders',
    component: WorkordersComponent,
  },
  // Define other routes for the dashboard module as needed
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
