import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TimepickerComponent } from './timepicker/timepicker.component';



export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'buttons',
      component: ButtonsComponent,
      data: {
        heading: 'Buttons'
      }
    },  {
      path: 'pagination',
      component: PaginationComponent,
      data: {
        heading: 'Pagination'
      }
    }, {
      path: 'spinners',
      component: SpinnersComponent,
      data: {
        heading: 'Spinner'
      }
    }, {
      path: 'accordion',
      component: AccordionComponent,
      data: {
        heading: 'Accordion'
      }
    }, {
      path: 'alert',
      component: AlertComponent,
      data: {
        heading: 'Alert'
      }
    },   {
      path: 'datepicker',
      component: DatepickerComponent,
      data: {
        heading: 'Datepicker'
      }
    }, {
      path: 'dropdown',
      component: DropdownComponent,
      data: {
        heading: 'Dropdown'
      }
    }, {
      path: 'timepicker',
      component: TimepickerComponent,
      data: {
        heading: 'Timepicker'
      }
    }  ]
  }
];
