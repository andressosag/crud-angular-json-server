import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPaisComponent } from './editar-pais.component';

describe('EditarPaisComponent', () => {
  let component: EditarPaisComponent;
  let fixture: ComponentFixture<EditarPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPaisComponent]
    });
    fixture = TestBed.createComponent(EditarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
