import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLteFormsComponent } from './admin-lte-forms.component';

describe('AdminLteFormsComponent', () => {
  let component: AdminLteFormsComponent;
  let fixture: ComponentFixture<AdminLteFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLteFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
