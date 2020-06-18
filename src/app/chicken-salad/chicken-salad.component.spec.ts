import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenSaladComponent } from './chicken-salad.component';

describe('ChickenSaladComponent', () => {
  let component: ChickenSaladComponent;
  let fixture: ComponentFixture<ChickenSaladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenSaladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
