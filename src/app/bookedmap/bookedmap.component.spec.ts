import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedmapComponent } from './bookedmap.component';

describe('BookedmapComponent', () => {
  let component: BookedmapComponent;
  let fixture: ComponentFixture<BookedmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
