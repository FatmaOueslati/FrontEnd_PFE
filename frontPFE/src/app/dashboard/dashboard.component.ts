import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as shape from 'd3-shape';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {DashboardService} from '../dashboard.service';
import {TookenService} from '../authentication/signin/tooken.service';
import {NgbModal, ModalDismissReasons, NgbDatepicker, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
const I18N_VALUES = {
  en: {
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  fr: {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
  }
};
import {
  single,
  generateData
} from '../shared/chartData';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService , TookenService, NgbActiveModal ]

})

export class DashboardComponent implements OnInit {
  single: any[];
  cardsdaata: any;
  projectsdata: any[];
  userProjects: any[]= [];
  projects: any;
  graph: {
    links: any[],
    nodes: any[]
  };
  dateData: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  roundDomains = false;
  colorScheme = {
    domain: [
    '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  schemeType = 'ordinal';
  // line interpolation
  curve = shape.curveLinear;
  // line, area
  timeline = false;
  // margin
  margin = false;
  marginTop = 40;
  marginRight = 40;
  marginBottom = 40;
  marginLeft = 40;
  // gauge
  gaugeMin = 0;
  gaugeMax = 50;
  gaugeLargeSegments = 10;
  gaugeSmallSegments = 5;
  gaugeTextValue = '';
  gaugeUnits = 'alerts';
  gaugeAngleSpan = 240;
  gaugeStartAngle = -120;
  gaugeShowAxis = true;
  gaugeValue = 50; // linear gauge value
  gaugePreviousValue = 70;
  public error = null ;
  public profile: any ;
  closeResult: string;
  d2: any;
  d3: any;
  date1;
  date2;
  projectname: string;
  projectdescription: string;
  constructor( private cards: DashboardService , private token: TookenService, private modalService: NgbModal,
               private modal: NgbActiveModal , private route: Router) {
    Object.assign(this, {
      single
    });
    this.dateData = generateData(5, false);
    this.profile = this.token.getUserID();
  }



  open(content) {
    this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
  LoadCards() {
    this.cards.getCards(this.cardsdaata).subscribe(data => {
     //  this.projectsdata = data ;
     // this.projectsdata = Object.keys(data);
      // this.projectsdata = Object['values'](data);
     // this.projects = JSON.stringify(data);
      this.projectsdata = Array.of(data);
     console.log('daaaaaaaaaaaaaaaaaaaaaaaaaaaaata projects' , this.projectsdata);
    });
  }
  LoadLinks() {
    this.cards.getLinks(this.profile).subscribe(data => {
      this.cardsdaata = data['projects'] ;
      console.log(this.cardsdaata);
    });
  }
  ngOnInit() {
    // getting projects ids from user id
    this.cards.getLinks(this.profile).subscribe(data => {
      this.projectsdata = data['projects'] ;
      console.log( ' +++++++++ ' );
      console.log(this.projectsdata);

      this.projectsdata.forEach(id => {
        this.cards.getProjectFromUrl(id).subscribe(
          project => {
            console.log(project);
            this.userProjects.push(project);
          });
          }
        );
    });
    this.LoadLinks();
  }
  CreateProject() {
    console.log('done');
    console.log(this.date1.year + '-' + this.date1.month + '-' + this.date1.day);
    const dt1 = this.date1.year + '-' + this.date1.month + '-' + this.date1.day;
    const dt2 = this.date2.year + '-' + this.date2.month + '-' + this.date2.day;
    //
    this.cards.addProject({
      name: this.projectname,
      description: this.projectdescription,
      dateStart: dt1,
      dateEnd: dt2,
      status: 'En cours',
      users: ['/api/users/' + this.profile],
      epics: [],
      meet: []
    }).subscribe( data => {
      this.userProjects.push(data);
     // console.log('finaaaaaaaaaaaaaaal' , data);
      }
    );
  }

  // deleteProject(id:string){
  //   this.userProjects.forEach( (item, index)=>
  //   {
  //     if ( project.id === id) {
  //       this.userProjects.
  //     }
  //   })
  // }
  removeDocument(id) {
    this.userProjects.forEach( (element, i) => {
      if(element.id === id) {
        this.cards.deleteProject(id).subscribe(() => {
          console.log('deleted');
        });
        this.userProjects.splice(i,1 );
      }
    });
  }

}
