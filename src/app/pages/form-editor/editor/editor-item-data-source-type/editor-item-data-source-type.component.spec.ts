import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorItemDataSourceTypeComponent } from './editor-item-data-source-type.component';

describe('EditorItemDataSourceTypeComponent', () => {
  let component: EditorItemDataSourceTypeComponent;
  let fixture: ComponentFixture<EditorItemDataSourceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorItemDataSourceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorItemDataSourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
