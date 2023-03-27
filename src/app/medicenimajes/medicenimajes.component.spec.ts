import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicenimajesComponent } from './medicenimajes.component';

describe('MedicenimajesComponent', () => {
  let component: MedicenimajesComponent;
  let fixture: ComponentFixture<MedicenimajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicenimajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicenimajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
