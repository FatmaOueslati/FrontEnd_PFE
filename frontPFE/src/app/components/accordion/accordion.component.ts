import {Component, OnInit} from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Params, ActivatedRoute } from '@angular/router';
import {DashboardService} from '../../dashboard.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  providers:[DashboardService]
})
export class AccordionComponent implements OnInit{
  acc: any;
  projectid: string;
  project: any;
  epics: any[]=[];
  public beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === '2') {
      $event.preventDefault();
    }
    if ($event.panelId === '3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
  constructor( private cards: DashboardService , private route: ActivatedRoute) {
    const id = '' + this.route.snapshot.params['id'];
    this.projectid = id;
  }
  LoadLinks() {
    this.cards.getProject(this.projectid).subscribe(data => {
      this.project = data ;
      // this.epics = data['epics'];


      data['epics'].forEach(id => {
          this.cards.getEpicById(id).subscribe(
            epic => {
              console.log(epic);
              this.epics.push(epic);
            });
        }
      );


      console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzz' , this.project);
      console.log('zeoicssssssssssssssssssss' , this.epics);
    });
  }
  ngOnInit(){
    this.LoadLinks();
    }

}
