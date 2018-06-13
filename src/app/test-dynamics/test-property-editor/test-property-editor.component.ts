import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-property-editor',
  templateUrl: './test-property-editor.component.html',
  styleUrls: ['./test-property-editor.component.css']
})
export class TestPropertyEditorComponent implements OnInit {

  object: object;

  constructor() { }

  ngOnInit() {
    this.object = {
      id: 'id',
      libelle: 'libelle'
    };

  }

}
