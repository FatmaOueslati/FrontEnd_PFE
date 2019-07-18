import { Routes } from '@angular/router';


import { EditorComponent } from './editor/editor.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadComponent } from './upload/upload.component';


export const FormRoutes: Routes = [
  {
    path: '',
    children: [  {
      path: 'editor',
      component: EditorComponent,
      data: {
        heading: 'Créer user story'
      }
    }, {
      path: 'validation',
      component: ValidationComponent,
      data: {
        heading: 'Profil'
      }
    }, {
      path: 'upload',
      component: UploadComponent,
      data: {
        heading: 'Upload'
      }
    }]
  }
];
