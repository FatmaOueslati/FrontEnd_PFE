import { Injectable } from '@angular/core';
import {TookenService} from '../../authentication/signin/tooken.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class UserStoryService {
  headers: any ;
  x: any ;
  constructor(private http: HttpClient , private token: TookenService) {
    this.x = 'Bearer' + ' ' + this.token.get();
    this.headers = new HttpHeaders({Authorization : this.x });
    // console.log(this.x);
  }
  addStory(data) {
    return this.http.post(  'http://localhost:8000/' , data , {headers : this.headers} );
  }
}
