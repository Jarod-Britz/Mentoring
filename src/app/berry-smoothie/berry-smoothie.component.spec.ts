import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerrySmoothieComponent } from './berry-smoothie.component';

describe('BerrySmoothieComponent', () => {
  let component: BerrySmoothieComponent;
  let fixture: ComponentFixture<BerrySmoothieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerrySmoothieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerrySmoothieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
