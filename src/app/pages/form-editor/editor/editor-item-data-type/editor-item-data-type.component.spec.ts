import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorItemDataTypeComponent } from './editor-item-data-type.component';

describe('EditorItemDataTypeComponent', () => {
  let component: EditorItemDataTypeComponent;
  let fixture: ComponentFixture<EditorItemDataTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorItemDataTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorItemDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
