import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPropertyEditorComponent } from './test-property-editor.component';

describe('TestPropertyEditorComponent', () => {
  let component: TestPropertyEditorComponent;
  let fixture: ComponentFixture<TestPropertyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPropertyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPropertyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
