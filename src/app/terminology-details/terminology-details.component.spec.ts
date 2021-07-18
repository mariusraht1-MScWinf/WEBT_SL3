import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminologyDetailsComponent } from './terminology-details.component';

describe('TerminologyDetailsComponent', () => {
  let component: TerminologyDetailsComponent;
  let fixture: ComponentFixture<TerminologyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminologyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminologyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
