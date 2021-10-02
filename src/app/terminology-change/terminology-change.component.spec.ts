import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminologyChangeComponent } from './terminology-change.component';

describe('TerminologyChangeComponent', () => {
  let component: TerminologyChangeComponent;
  let fixture: ComponentFixture<TerminologyChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminologyChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminologyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
