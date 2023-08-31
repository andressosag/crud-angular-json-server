import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPaisComponent } from './listar-pais.component';

describe('ListarPaisComponent', () => {
  let component: ListarPaisComponent;
  let fixture: ComponentFixture<ListarPaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPaisComponent]
    });
    fixture = TestBed.createComponent(ListarPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
