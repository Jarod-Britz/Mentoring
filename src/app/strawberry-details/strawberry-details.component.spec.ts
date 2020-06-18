import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawberryDetailsComponent } from './strawberry-details.component';

describe('ProductDetailsComponent', () => {
  let component: StrawberryDetailsComponent;
  let fixture: ComponentFixture<StrawberryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawberryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrawberryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
