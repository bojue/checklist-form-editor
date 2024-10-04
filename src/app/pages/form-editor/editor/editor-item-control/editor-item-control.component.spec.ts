import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorItemControlComponent } from './editor-item-control.component';

describe('EditorItemControlComponent', () => {
  let component: EditorItemControlComponent;
  let fixture: ComponentFixture<EditorItemControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorItemControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorItemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
