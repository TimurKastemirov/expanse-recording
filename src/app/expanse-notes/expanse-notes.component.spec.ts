import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanseNotesComponent } from './expanse-notes.component';

describe('ExpanseNotesComponent', () => {
  let component: ExpanseNotesComponent;
  let fixture: ComponentFixture<ExpanseNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanseNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanseNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
