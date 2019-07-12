import { Component , OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {DashboardService} from '../dashboard.service';
import {TookenService} from '../authentication/signin/tooken.service';
import {
  single,
  generateData
} from '../shared/chartData';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService , TookenService]
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
  constructor( private cards: DashboardService , private token: TookenService) {
    Object.assign(this, {
      single
    });
    this.dateData = generateData(5, false);
    this.profile = this.token.getUserID();
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
      /*
      console.log("data");

      for (let d of data) {
        console.log(d);
      }
      console.log(data);
      this.cardsdaata = data['projects'] ;
      this.LoadCards();
      console.log('1' , this.cardsdaata);
      */
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
      console.log('99999');
       console.log(this.userProjects[0]);


    });

    // getting projects of the user
    // this.cards.getProject()

    // this.LoadCards();
    this.LoadLinks();
    // console.log('haaaaaaaaaaaw elprofil ID' , this.profile);

  }
}
