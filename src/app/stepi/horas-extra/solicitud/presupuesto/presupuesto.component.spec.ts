import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoComponent } from './presupuesto.component';

describe('PresupuestoComponent', () => {
  let component: PresupuestoComponent;
  let fixture: ComponentFixture<PresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
