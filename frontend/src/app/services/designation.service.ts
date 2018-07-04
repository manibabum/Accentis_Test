import { Injectable } from '@angular/core';
import {Designation} from '../models/settings.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
declare var require:any;
const endpoint: any = require('../../assets/application.json');

@Injectable()
export class DesignationService {
  token: string;
  public now: Date = new Date();
  constructor(private httpclient: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  addDesignation(designation: Designation): Observable<Designation[]> {
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
      designation.Status = true;
      designation.Delete = false;
      designation.CreatedDate = this.now;
       return this.httpclient.post<Designation[]>(endpoint.ApiAddress+'/Designation', designation, httpOptions);
    }
    return;
  }

  getSDesignationList(state: DataSourceRequestState): Observable<Designation[]> {
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
      return this.httpclient.get<Designation[]>(endpoint.ApiAddress+'/Designation?' + toDataSourceRequestString(state), httpOptions);
    }
    return;
  }

  updateDesignation(designation: Designation): Observable<Designation[]> {
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
      designation.Status = true;
      designation.Delete = false;
      designation.ModifiedDate = this.now;
      return this.httpclient.put<Designation[]>(endpoint.ApiAddress+'/Designation', designation, httpOptions);
    }
    return;
  }


  deleteDesignation(Id:number): Observable<Designation[]> {
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
      return this.httpclient.delete<Designation[]>(endpoint.ApiAddress+'/Designation/'+Id, httpOptions);
    }
    return;
  }
}

  
