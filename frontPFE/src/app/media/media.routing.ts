import { Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';



export const MediaRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'grid',
      component: GridComponent,
      data: {
        heading: 'Media Grid'
      }
    }]
  }
];
