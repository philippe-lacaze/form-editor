import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-editor',
  templateUrl: './property-editor.component.html',
  styleUrls: ['./property-editor.component.css']
})
export class PropertyEditorComponent implements OnInit {

  @Input()
  object: object;

  @Input()
  name: string;

  constructor() { }


  ngOnInit() {
  }

}
