import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Role } from '../models/settings.model';
declare var require:any;
const endpoint: any = require('../../assets/application.json');

@Injectable()
export class RoleService {
  
  token: string;
  constructor(private httpclient: HttpClient) {
    this.token = localStorage.getItem('token');
   }

  addRole(role: Role): Observable<Role[]> {
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
       return this.httpclient.post<Role[]>(endpoint.ApiAddress+'/RoleApi/'+role.Name, role.Name, httpOptions);
    }
    return;
  }

  getRoleList(state: DataSourceRequestState): Observable<Role[]> {
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
      return this.httpclient.get<Role[]>(endpoint.ApiAddress+'/RoleApi?' + toDataSourceRequestString(state), httpOptions);
    }
    return;
  }

  updateRole(role: Role): Observable<Role[]> {
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
      return this.httpclient.put<Role[]>(endpoint.ApiAddress+'/RoleApi?roleId='+role.Id+'&role='+role.Name, role, httpOptions);
    }
    return;
  }


  deleteRole(Id:number): Observable<Role[]> {
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
      return this.httpclient.delete<Role[]>(endpoint.ApiAddress+'/RoleApi/'+Id, httpOptions);
    }
    return;
  }
}
