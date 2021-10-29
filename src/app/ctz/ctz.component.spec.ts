import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtzComponent } from './ctz.component';

describe('CtzComponent', () => {
  let component: CtzComponent;
  let fixture: ComponentFixture<CtzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
