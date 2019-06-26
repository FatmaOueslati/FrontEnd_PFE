import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './components.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertComponent } from './alert/alert.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TimepickerComponent } from './timepicker/timepicker.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    ButtonsComponent,
     PaginationComponent,
    SpinnersComponent,
    AccordionComponent,
    AlertComponent,
    DatepickerComponent,
    DropdownComponent,
    TimepickerComponent
  ]
})

export class ComponentsModule {}

