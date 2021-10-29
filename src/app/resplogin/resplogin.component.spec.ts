import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResploginComponent } from './resplogin.component';

describe('ResploginComponent', () => {
  let component: ResploginComponent;
  let fixture: ComponentFixture<ResploginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResploginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResploginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
