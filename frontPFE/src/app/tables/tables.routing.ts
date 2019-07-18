import { Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';


export const TablesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic/:id',
      component: BasicComponent,
      data: {
        heading: 'Réunions'
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
