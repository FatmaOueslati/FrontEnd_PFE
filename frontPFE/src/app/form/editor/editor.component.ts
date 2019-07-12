import { Component, OnInit } from '@angular/core';
import * as Quill from 'quill';
import {UserStoryService} from './user-story.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public user = {
    name : null ,
    description : null ,
    BV : null,
    priority : null ,
    status : null ,
    ptComplex : null ,
  };
  constructor(private userStory: UserStoryService) {}
  ngOnInit() {
    const quill = new Quill('#editor-container', {
      modules: {
        toolbar: {
          container: '#toolbar-toolbar'
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }
}
