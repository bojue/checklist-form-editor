import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTextareaComponent } from './item-textarea.component';

describe('ItemTextareaComponent', () => {
  let component: ItemTextareaComponent;
  let fixture: ComponentFixture<ItemTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
