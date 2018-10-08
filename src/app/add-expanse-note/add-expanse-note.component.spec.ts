import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpanseNoteComponent } from './add-expanse-note.component';

describe('AddExpanseNoteComponent', () => {
  let component: AddExpanseNoteComponent;
  let fixture: ComponentFixture<AddExpanseNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpanseNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpanseNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
