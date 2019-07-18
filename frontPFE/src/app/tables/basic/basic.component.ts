import { Component , OnInit } from '@angular/core';
import {DashboardService} from '../../dashboard.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  providers: [DashboardService],
})
export class BasicComponent implements OnInit {
  public error: null;
  projectid: any;
  title: any;
  description: any;
  date: any;
  type: any;

  TableMeetings: any = [];
  constructor( private meeting: DashboardService , private route: ActivatedRoute) {
    const id = '' + this.route.snapshot.params['id'];
    this.projectid = id;
  }
  ngOnInit() {
    this.LoadRequest();
  }

  LoadRequest() {
    this.meeting.GetMeetings().subscribe(
      data => { this.TableMeetings = data ; console.log('ooooaoakokeoek' , this.TableMeetings) ; }
    );
  }

  addMeeting() {
    console.log(this.title);
    console.log(this.type);
    console.log(this.description);
    console.log(this.date);

    this.TableMeetings.push({
      'date': this.date,
      'description': this.description,
      'name': this.title,
      'type': this.type
    });
    this.title = '';
    this.description = '';
    this.date = '';
    this.type = '';
  }
}

