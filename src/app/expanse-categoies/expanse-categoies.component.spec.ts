import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseCategoiesComponent } from './expanse-categoies.component';

describe('ExpanseCategoiesComponent', () => {
  let component: ExpanseCategoiesComponent;
  let fixture: ComponentFixture<ExpanseCategoiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanseCategoiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanseCategoiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
