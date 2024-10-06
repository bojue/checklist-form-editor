import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorItemDataTextareaComponent } from './editor-item-data-textarea.component';

describe('EditorItemDataTextareaComponent', () => {
  let component: EditorItemDataTextareaComponent;
  let fixture: ComponentFixture<EditorItemDataTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorItemDataTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorItemDataTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
