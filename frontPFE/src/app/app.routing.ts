import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
   // {
    //path: 'components',
   // loadChildren: './components/components.module#ComponentsModule'
  //},
   // {
   // path: 'icons',
    //loadChildren: './icons/icons.module#IconsModule'
  //},
    {
    path: 'forms',
    loadChildren: './form/form.module#FormModule'
  },  {
      path: 'cards',
      loadChildren: './cards/cards.module#CardsModule'
    },{
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }, {
    path: 'datatable',
    loadChildren: './datatable/datatable.module#DatatableModule'
  },

    {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
    {
    path: 'taskboard',
    loadChildren: './taskboard/taskboard.module#TaskboardModule'
  }, {
    path: 'calendar',
    loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
  },
    {
    path: 'media',
    loadChildren: './media/media.module#MediaModule'
  },
    {
      path: 'components',
      loadChildren: './components/components.module#ComponentsModule'
    },
    {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  }]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
    {
      path: 'error',
      loadChildren: './error/error.module#ErrorModule'
    }, {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

