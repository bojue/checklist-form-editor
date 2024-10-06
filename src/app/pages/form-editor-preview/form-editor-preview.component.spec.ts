import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorPreviewComponent } from './form-editor-preview.component';

describe('FormEditorPreviewComponent', () => {
  let component: FormEditorPreviewComponent;
  let fixture: ComponentFixture<FormEditorPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
