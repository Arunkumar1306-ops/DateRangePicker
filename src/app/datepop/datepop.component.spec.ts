import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepopComponent } from './datepop.component';

describe('DatepopComponent', () => {
  let component: DatepopComponent;
  let fixture: ComponentFixture<DatepopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
