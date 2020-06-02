import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDosDetailsComponent } from './todos-details.component';

describe('ToDosDetailsComponent', () => {
  let component: ToDosDetailsComponent;
  let fixture: ComponentFixture<ToDosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
