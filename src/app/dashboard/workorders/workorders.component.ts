import { Component } from '@angular/core';
import { WorkOrder, WorkordersService } from '../../services/workorders.service';

@Component({
  selector: 'app-workorders',
  templateUrl: './workorders.component.html',
  styleUrls: ['./workorders.component.css']
})
export class WorkordersComponent {

  workOrders:any;
  constructor(private workOrdersService: WorkordersService) {

  }

  ngOnInit() {
    this.workOrdersService.getWorkOrdersList().
      subscribe((data) => {
        console.log('Data received', data);
        this.workOrders = data;
      })
  }
}
