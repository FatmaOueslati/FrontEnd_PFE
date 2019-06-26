import { Routes } from '@angular/router';


import { TimelineComponent } from './timeline/timeline.component';


import { ForumComponent } from './forum/forum.component';
import { BlankComponent } from './blank/blank.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'forum',
      component: ForumComponent,
      data: {
        heading: 'Forum'
      }
    }, {
      path: 'timeline',
      component: TimelineComponent,
      data: {
        heading: 'Timeline'
      }
    }, {
      path: 'blank',
      component: BlankComponent,
      data: {
        heading: 'Blank'
      }
    }]
  }
];
