import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

const work_order_notes = [
  { date: '1/23/23', user: 'Name01', note: 'We were missing 1000 units; ordered and should arrive next week, 2/6/2023' },
  { date: '2/23/23', user: 'Name02', note: 'We were missing 1000 units; ordered and should arrive next week, 2/6/2023' },
  { date: '3/23/23', user: 'Name03', note: 'We were missing 1000 units; ordered and should arrive next week, 2/6/2023' },
  { date: '4/23/23', user: 'Name04', note: 'We were missing 1000 units; ordered and should arrive next week, 2/6/2023' },
  { date: '5/23/23', user: 'Name05', note: 'We were missing 1000 units; ordered and should arrive next week, 2/6/2023' },
  { date: '6/23/23', user: 'Name06', note: 'We were missing 1000 units; ordered and should arrive next week, 2/6/2023' }
];

const decoration_table = [
  { sku: 'BM00012345', id: 'ABC1234', type: 'Heat Transfer', loc: 'LC', number_of_artifact: 3, colors: 3 },
  { sku: 'BM00012346', id: 'ABC1235', type: 'Heat Transfer', loc: 'RC', number_of_artifact: 4, colors: 4 },
  { sku: 'BM00012347', id: 'ABC1236', type: 'Heat Transfer', loc: 'RC', number_of_artifact: 4, colors: 4 },
  { sku: 'BM00012346', id: 'ABC1235', type: 'Heat Transfer', loc: 'RC', number_of_artifact: 4, colors: 4 },
  { sku: 'BM00012346', id: 'ABC1235', type: 'Heat Transfer', loc: 'RC', number_of_artifact: 4, colors: 4 },
  { sku: 'BM00012346', id: 'ABC1235', type: 'Heat Transfer', loc: 'RC', number_of_artifact: 4, colors: 4 },
  { sku: 'BM00012346', id: 'ABC1235', type: 'Heat Transfer', loc: 'RC', number_of_artifact: 4, colors: 4 },

];


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})


export class OrderdetailsComponent implements OnInit {

  displayedColumns_wo: string[] = ['date', 'user', 'note'];
  dataSource_wo = work_order_notes;

  displayedColumns_dt: string[] = ['sku', 'id', 'type', 'loc', 'number_of_artifact', 'colors'];
  decoration_table_src = decoration_table;

  customOptions: OwlOptions = {};

  ngOnInit(): void {
    setTimeout(() => {
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          }
        },
        nav: true
      }

     }, 1000);
  }

}
