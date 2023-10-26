import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
export interface WorkOrder {
  id: number,
  orderId: string,
  product: object,
  customer: string,
  pipeline: string,
  stage: string,
  orderDate: string,
  shipDate: string
}
@Injectable({
  providedIn: 'root'
})

export class WorkordersService {

  constructor(private http: HttpClient) { }

  getWorkOrdersList() {
    //return this.http.get('http://localhost:3001/workorders');

    const workOrders = this.http.get('http://localhost:3000/workorders').pipe(
      catchError((error) => {
        // Handle the error within the service
        console.error('Failed to fetch data:', error);
        return throwError('Failed to fetch data. Please try again later.');
      })
    );
    return workOrders;
  }
}
