import { Injectable } from '@angular/core';
import {TookenService} from './authentication/signin/tooken.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class DashboardService {
  headers: any ;

  constructor(private http: HttpClient , private token: TookenService) {
    this.headers = new HttpHeaders({'x-access-token': this.token.get() });
  }
}
