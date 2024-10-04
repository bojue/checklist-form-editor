import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorItemNameComponent } from './editor-item-name.component';

describe('EditorItemNameComponent', () => {
  let component: EditorItemNameComponent;
  let fixture: ComponentFixture<EditorItemNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorItemNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorItemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
