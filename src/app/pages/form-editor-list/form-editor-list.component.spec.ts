import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditorListComponent } from './form-editor-list.component';

describe('FormEditorListComponent', () => {
  let component: FormEditorListComponent;
  let fixture: ComponentFixture<FormEditorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
