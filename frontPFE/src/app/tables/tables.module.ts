import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TablesRoutes } from './tables.routing';
import { BasicComponent } from './basic/basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ResponsiveComponent } from './responsive/responsive.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
  ],
  declarations: [BasicComponent]
})
//, ResponsiveComponent fi declaration
export class TablesModule {}
