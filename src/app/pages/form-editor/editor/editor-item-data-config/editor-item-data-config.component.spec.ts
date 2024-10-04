import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorItemDataConfigComponent } from './editor-item-data-config.component';

describe('EditorItemDataConfigComponent', () => {
  let component: EditorItemDataConfigComponent;
  let fixture: ComponentFixture<EditorItemDataConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorItemDataConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorItemDataConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
