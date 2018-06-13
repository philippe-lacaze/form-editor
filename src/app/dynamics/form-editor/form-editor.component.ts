import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {

  get properties(): string[] {
    return Object.keys(this.object);
  };

  @Input()
  object: object;

  constructor() { }

  ngOnInit() {
  }

}
