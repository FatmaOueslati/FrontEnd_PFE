import { Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { PortletsComponent } from './portlets/portlets.component';


export const CardsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic',
      component: BasicComponent,
      data: {
        heading: 'Basic card'
      }
    }, {
      path: 'portlets',
      component: PortletsComponent,
      data: {
        heading: 'Portlets'
      }
    }]
  }
];
