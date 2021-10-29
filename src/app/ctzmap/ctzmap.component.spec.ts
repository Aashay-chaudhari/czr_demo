import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtzmapComponent } from './ctzmap.component';

describe('CtzmapComponent', () => {
  let component: CtzmapComponent;
  let fixture: ComponentFixture<CtzmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtzmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtzmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
