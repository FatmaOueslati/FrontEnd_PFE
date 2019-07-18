import { Injectable } from '@angular/core';
import {TookenService} from '../authentication/signin/tooken.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class ProfilService {
  headers: any ;
  x: any ;
  constructor(private http: HttpClient , private token: TookenService) {
    this.x = 'Bearer' + ' ' + this.token.get();
    this.headers = new HttpHeaders({Authorization : this.x });
    // console.log(this.x);
  }
  getProfile(id) {
    return this.http.get(  'http://localhost:8000/api/users/' + id , {headers : this.headers} );
  }
  updateProfile(id , data) {
    return this.http.put(  'http://localhost:8000/api/users/' + id , data, {headers : this.headers} );
  }
}
