import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsFilterComponent } from './destinations-filter.component';

describe('DestinationsFilterComponent', () => {
  let component: DestinationsFilterComponent;
  let fixture: ComponentFixture<DestinationsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
