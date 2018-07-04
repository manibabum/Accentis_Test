import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Users } from '../models/settings.model';
declare var require: any;
const endpoint: any = require('../../assets/application.json');

@Injectable()
export class UserService {
  token: string;
  public now: Date = new Date();
  constructor(private httpclient: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  addUser(user: Users): Observable<Users[]> {
    var headers = new HttpHeaders();
    if (this.token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': this.token,
        })
      };
      user.Status = true;
      user.Delete = false;
      user.CreatedDate = this.now;
      return this.httpclient.post<Users[]>(endpoint.ApiAddress + '/User', user, httpOptions);
    }
    return;
  }

  getUserList(state: DataSourceRequestState): Observable<Users[]> {
    var headers = new HttpHeaders();
    if (this.token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': this.token,
        })
      };
      return this.httpclient.get<Users[]>(endpoint.ApiAddress + '/User?' +  toDataSourceRequestString(state), httpOptions);
    }
    return;
  }

  updateUser(user: Users): Observable<Users[]> {
    var headers = new HttpHeaders();
    if (this.token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': this.token,
        })
      };
      user.Status = true;
      user.Delete = false;
      user.EmailConfirmed=true;
      user.PhoneNumberConfirmed=true;
      user.ModifiedDate = this.now;
      return this.httpclient.put<Users[]>(endpoint.ApiAddress + '/User', user, httpOptions);
    }
    return;
  }


  deleteUser(Id: number): Observable<Users[]> {
    var headers = new HttpHeaders();
    if (this.token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': this.token,
        })
      };
     return this.httpclient.delete<Users[]>(endpoint.ApiAddress + '/User/' + Id, httpOptions);
    }
    return;
  }
}
