import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PagesRoutes } from './pages.routing';

import { TimelineComponent } from './timeline/timeline.component';

import { ForumComponent } from './forum/forum.component';

import { BlankComponent } from './blank/blank.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [ TimelineComponent,  ForumComponent,  BlankComponent]
})

export class PagesModule {}
