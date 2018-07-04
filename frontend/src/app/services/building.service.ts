import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataSourceRequestState } from '@progress/kendo-data-query';
import { Building } from '../models/building.model';
declare var require:any;
const endpoint: any = require('../../assets/application.json');
@Injectable()
export class BuildingService {
  token: string;
  public now: Date = new Date();
  constructor(private httpclient: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  getBuildingList(state: DataSourceRequestState): Observable<Building[]> {
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
      return this.httpclient.get<Building[]>(endpoint.ApiAddress+'/Building?' + state, httpOptions);
    }
    return;
  }

}
