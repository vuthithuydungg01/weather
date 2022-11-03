import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface database {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
//json-server --watch db.json
export class ApiProcessService {
  url = 'http://localhost:3000';
  // private httpOption = {
  //   headers: new HttpHeaders ({
  //     'Content-Type': 'application/json'
  //   })
  // }
  constructor(public http: HttpClient) { }

  public getData(url: string) {
    return this.http.get<any[]>(url);
  }

  public addUser(data: database):Observable<any>
   {
    let urlAddUser = `${this.url}/users`;
    console.log('AddUser service: ', data);
    return this.http.post<any>(urlAddUser, data);
    // .pipe(catchError(this.handleError));
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //   }
  //   return throwError('Something bad happened; please try again later.');
  // }
}
