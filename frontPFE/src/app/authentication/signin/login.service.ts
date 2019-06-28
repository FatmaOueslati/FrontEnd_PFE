import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(data1) {
    // const body = new URLSearchParams();
    //  body.set('_username', data1.username);
    //  body.set('_password', data1.password);
    // const formData = new FormData();
    // formData.append('_username', data1._username);
    // formData.append('_password' , data1._password);
    // const headers = new HttpHeaders({'content-type': ' application/x-www-form-urlencoded'});
    // return this.http.post('http://127.0.0.1:8000/auth/login_check' , data1 , {headers: headers})
    return this.http.post('http://127.0.0.1:8000/api/login_check' , data1)
      ;
  }

}
