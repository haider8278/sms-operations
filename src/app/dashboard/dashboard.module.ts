import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkordersComponent } from './workorders/workorders.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    WorkordersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashboardModule { }
