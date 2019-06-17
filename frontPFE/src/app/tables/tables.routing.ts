import { Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';


export const TablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic',
      component: BasicComponent,
      data: {
        heading: 'Basic table'
      }
    }, /*{
      path: 'responsive',
      component: ResponsiveComponent,
      data: {
        heading: 'Responsive'
      }
    }*/]
  }
];
