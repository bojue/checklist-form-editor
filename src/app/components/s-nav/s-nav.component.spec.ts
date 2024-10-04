import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SNavComponent } from './s-nav.component';

describe('SNavComponent', () => {
  let component: SNavComponent;
  let fixture: ComponentFixture<SNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
