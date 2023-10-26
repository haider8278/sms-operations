import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkordersComponent } from './workorders/workorders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

const routes: Routes = [
  {
    path: 'work-orders',
    component: WorkordersComponent,
  },
  {
    path: 'work-orders/:id',
    component: OrderdetailsComponent,
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
