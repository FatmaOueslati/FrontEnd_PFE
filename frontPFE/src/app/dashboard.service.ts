import { Injectable } from '@angular/core';
import {TookenService} from './authentication/signin/tooken.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class DashboardService {
  headers: any ;
  x: any ;

  constructor(private http: HttpClient , private token: TookenService) {
    this.x = 'Bearer' + ' ' + this.token.get();
    this.headers = new HttpHeaders({Authorization : this.x });
   // console.log(this.x);
  }
  getLinks(id) {
  //  return this.http.get(  'http://localhost:8000/api/projects/' + id , {headers : this.headers} );
    return this.http.get(  'http://localhost:8000/api/users/' + id , {headers : this.headers} );
  }
  getCards(id) {
      return this.http.get(  'http://localhost:8000' + id , {headers : this.headers} );
  }

  getProject(id) {
    return this.http.get(  'http://localhost:8000/api/projects/' + id , {headers : this.headers} );
  }
  getProjectFromUrl(id) {
    return this.http.get(  'http://localhost:8000' + id , {headers : this.headers} );
  }

}
