import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataSourceRequestState, toDataSourceRequestString } from '@progress/kendo-data-query';
import { ConstructionParts } from '../models/settings.model';
declare var require:any;
const endpoint: any = require('../../assets/application.json');

@Injectable()
export class ConstructionpartsService {
  token: string;
  public now: Date = new Date();
  constructor(private httpclient: HttpClient) { 
    this.token = localStorage.getItem('token');

  }

  addConstructionPart(constructionPart: ConstructionParts): Observable<ConstructionParts[]> {
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
      constructionPart.Status = true;
      constructionPart.Delete = false;
      constructionPart.CreatedDate = this.now;
       return this.httpclient.post<ConstructionParts[]>(endpoint.ApiAddress+'/ConstructionParts', constructionPart, httpOptions);
    }
    return;
  }

  getConstructionPartList(state: DataSourceRequestState): Observable<ConstructionParts[]> {
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
      return this.httpclient.get<ConstructionParts[]>(endpoint.ApiAddress+'/ConstructionParts?' + toDataSourceRequestString(state), httpOptions);
    }
    return;
  }

  updateConstructionPart(constructionPart: ConstructionParts): Observable<ConstructionParts[]> {
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
      constructionPart.Status = true;
      constructionPart.Delete = false;
      constructionPart.ModifiedDate = this.now;
      return this.httpclient.put<ConstructionParts[]>(endpoint.ApiAddress+'/ConstructionParts', constructionPart, httpOptions);
    }
    return;
  }


  deleteConstructionPart(Id:number): Observable<ConstructionParts[]> {
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
      return this.httpclient.delete<ConstructionParts[]>(endpoint.ApiAddress+'/ConstructionParts/'+Id, httpOptions);
    }
    return;
  }
}