import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkordersComponent } from './workorders/workorders.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    WorkordersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
