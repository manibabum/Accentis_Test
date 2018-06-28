import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users, Login } from '../../models/settings.model';
import { Observable } from 'rxjs/Observable';

declare var require:any;
const endpoint: any = require('../../../assets/application.json');

@Injectable()
export class AuthService {
  token: string;
  //readonly rooturl = "http://localhost:54691/api";
  constructor(private httpclient:HttpClient) {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user  
  }

  // signinUser(username: string, password: string) {
  //   //your code for checking credentials and getting tokens for for signing in user
  //   var data = "username="+username+"&password="+password+"&grant_type="+password;
  //   var reqHeader = new HttpHeaders({'Content-Type':'application/json; charset=utf8'});
  //   return this.http.post(endpoint.ApiAddress+'/LoginApi/GenerateToken?'+data,data,{headers:reqHeader});
  // }

  signinUser(login: Login): Observable<Login[]> {
    
    var headers = new HttpHeaders();
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        })
      };
       return this.httpclient.post<Login[]>(endpoint.ApiAddress+'/LoginApi/GenerateToken', login, httpOptions);
  }
 
  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return true;
  }
}
