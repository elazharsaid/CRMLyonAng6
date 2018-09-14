import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPresationComponent } from './edit-presation.component';

describe('EditPresationComponent', () => {
  let component: EditPresationComponent;
  let fixture: ComponentFixture<EditPresationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPresationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPresationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
