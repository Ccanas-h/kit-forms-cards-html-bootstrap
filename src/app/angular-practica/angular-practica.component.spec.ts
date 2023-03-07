import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPracticaComponent } from './angular-practica.component';

describe('AngularPracticaComponent', () => {
  let component: AngularPracticaComponent;
  let fixture: ComponentFixture<AngularPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
