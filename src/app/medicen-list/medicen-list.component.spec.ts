import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicenListComponent } from './medicen-list.component';

describe('MedicenListComponent', () => {
  let component: MedicenListComponent;
  let fixture: ComponentFixture<MedicenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
