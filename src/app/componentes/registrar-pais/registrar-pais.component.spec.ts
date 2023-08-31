import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPaisComponent } from './registrar-pais.component';

describe('RegistrarPaisComponent', () => {
  let component: RegistrarPaisComponent;
  let fixture: ComponentFixture<RegistrarPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPaisComponent]
    });
    fixture = TestBed.createComponent(RegistrarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
