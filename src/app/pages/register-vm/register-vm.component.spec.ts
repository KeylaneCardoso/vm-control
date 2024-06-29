import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVmComponent } from './register-vm.component';

describe('RegisterVmComponent', () => {
  let component: RegisterVmComponent;
  let fixture: ComponentFixture<RegisterVmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterVmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
