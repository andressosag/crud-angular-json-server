import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PaisesService } from '../../paises.service';

@Component({
  selector: 'app-registrar-pais',
  templateUrl: './registrar-pais.component.html',
  styleUrls: ['./registrar-pais.component.css']
})
export class RegistrarPaisComponent implements OnInit {

  constructor(private pais:PaisesService) { }

  formPais = new FormGroup({
    nombre: new FormControl(''),
    poblacion: new FormControl(''),
  });

  mensaje:boolean = false;
  nombreRegistrado: string | null = null;

  ngOnInit(): void {

  }

  registrar(){

    this.pais.registrarPais( this.formPais.value ).subscribe((result) => {

      this.nombreRegistrado = this.formPais.value.nombre || null;

      this.mensaje = true;

      this.formPais.reset({});

      setTimeout(() => {
        this.mensaje = false;
      }, 3000);

    });

  }

}
