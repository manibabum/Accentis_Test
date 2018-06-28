import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { RoofComponent } from '../models/settings.model';
declare var require:any;
const endpoint: any = require('../../assets/application.json');


@Injectable()
export class RoofcomponentService {

  token: string;
  public now: Date = new Date();
  constructor(private httpclient: HttpClient) {
    this.token = localStorage.getItem('token');
   }


  addRoofComponent(roofcomponent: RoofComponent): Observable<RoofComponent[]> {
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
      roofcomponent.Status = true;
      roofcomponent.Delete = false;
      roofcomponent.CreatedDate = this.now;
       return this.httpclient.post<RoofComponent[]>(endpoint.ApiAddress+'/RoofComponent', roofcomponent, httpOptions);
    }
    return;
  }

  getRoofComponentList(state: DataSourceRequestState): Observable<RoofComponent[]> {
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
      return this.httpclient.get<RoofComponent[]>(endpoint.ApiAddress+'/RoofComponent?' + toDataSourceRequestString(state), httpOptions);
    }
    return;
  }

  updateRoofComponent(roofcomponent: RoofComponent): Observable<RoofComponent[]> {
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
      roofcomponent.Status = true;
      roofcomponent.Delete = false;
      roofcomponent.ModifiedDate = this.now;
      return this.httpclient.put<RoofComponent[]>(endpoint.ApiAddress+'/RoofComponent', roofcomponent, httpOptions);
    }
    return;
  }


  deleteRoofComponent(Id:number): Observable<RoofComponent[]> {
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
      return this.httpclient.delete<RoofComponent[]>(endpoint.ApiAddress+'/RoofComponent/'+Id, httpOptions);
    }
    return;
  }
}
