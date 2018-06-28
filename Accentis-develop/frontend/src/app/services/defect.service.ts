import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { Defect } from '../models/settings.model';
declare var require:any;
const endpoint: any = require('../../assets/application.json');

@Injectable()
export class DefectService {

  token: string;
  public now: Date = new Date();
  constructor(private httpclient: HttpClient) { 
    this.token = localStorage.getItem('token');
  }

  addDefect(defect: Defect): Observable<Defect[]> {
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
      defect.Status = true;
      defect.Delete = false;
      defect.CreatedDate = this.now;
       return this.httpclient.post<Defect[]>(endpoint.ApiAddress+'/Defacts', defect, httpOptions);
    }
    return;
  }

  getDefectList(state: DataSourceRequestState): Observable<Defect[]> {
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
      return this.httpclient.get<Defect[]>(endpoint.ApiAddress+'/Defacts?' + toDataSourceRequestString(state), httpOptions);
    }
    return;
  }

  updateDefect(defect: Defect): Observable<Defect[]> {
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
      defect.Status = true;
      defect.Delete = false;
      defect.ModifiedDate = this.now;
      return this.httpclient.put<Defect[]>(endpoint.ApiAddress+'/Defacts', defect, httpOptions);
    }
    return;
  }


  deleteDefect(Id:number): Observable<Defect[]> {
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
      return this.httpclient.delete<Defect[]>(endpoint.ApiAddress+'/Defacts/'+Id, httpOptions);
    }
    return;
  }
}
