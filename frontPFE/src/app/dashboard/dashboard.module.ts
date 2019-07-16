import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
 imports: [CommonModule, RouterModule.forChild(DashboardRoutes), NgbModule ,    FormsModule, ],
  declarations: [DashboardComponent]
})

export class DashboardModule {}
