import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLoginComponent } from './simple-login.component';

describe('SimpleLoginComponent', () => {
  let component: SimpleLoginComponent;
  let fixture: ComponentFixture<SimpleLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
