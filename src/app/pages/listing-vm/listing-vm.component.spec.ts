import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingVmComponent } from './listing-vm.component';

describe('ListingVmComponent', () => {
  let component: ListingVmComponent;
  let fixture: ComponentFixture<ListingVmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingVmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
