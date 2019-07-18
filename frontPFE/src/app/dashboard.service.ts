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

  PostMeeting(name: string, description: string, date: string, idproject: string) {
    const meeting = {
      name : 'test',
      description: 'gg',
      date: '16-07-2019',
      projects: [
        '/api/projects/1'
      ]
    };
    console.log(meeting)
    return this.http.post('http://localhost:8000/api/meetings' , meeting  , { headers: this.headers} );
  }

  getEpicById(data) {
    return this.http.get(  'http://localhost:8000' + data , {headers : this.headers} );
  }

  addProject(data) {
    return this.http.post(  'http://localhost:8000/api/projects' , data , {headers : this.headers} );
  }

  deleteProject(id) {
    return this.http.delete(  'http://localhost:8000/api/projects/' + id , {headers : this.headers} );
  }
  GetMeetings() {
    return this.http.get('http://localhost:8000/api/meetings/' , { headers: this.headers} )
  }

}
