import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkordersComponent } from './workorders/workorders.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';


@NgModule({
  declarations: [
    WorkordersComponent,
    OrderdetailsComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    CarouselModule
  ]
})
export class DashboardModule { }
