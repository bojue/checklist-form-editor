import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOperationComponent } from './nav-operation.component';

describe('NavOperationComponent', () => {
  let component: NavOperationComponent;
  let fixture: ComponentFixture<NavOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
