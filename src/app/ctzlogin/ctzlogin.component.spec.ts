import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtzloginComponent } from './ctzlogin.component';

describe('CtzloginComponent', () => {
  let component: CtzloginComponent;
  let fixture: ComponentFixture<CtzloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtzloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtzloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
