import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface User{
  id: number;
  name: string;
  empoloyeeId: number;
  pincode: number;
}


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(empId: number, pincode: number) {
    const user: User | {} = this.http.get(`http://localhost:30011/users/?empoloyeeId=${empId}&pincode=${pincode}`).pipe(
      catchError((error) => {
        // Handle the error within the service
        console.error('Failed to fetch data:', error);
        return throwError('Failed to fetch data. Please try again later.');
      })
    );
    console.log("user", user);
    return user;
  }
}
