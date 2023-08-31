import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { PaisesService } from '../../paises.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pais',
  templateUrl: './editar-pais.component.html',
  styleUrls: ['./editar-pais.component.css']
})
export class EditarPaisComponent implements OnInit {

  constructor(private pais:PaisesService, private router: ActivatedRoute) { }

  formPais = new FormGroup({
    nombre: new FormControl(''),
    poblacion: new FormControl(''),
  });

  mensaje:boolean = false;
  nombreActualizado: string | null = null;

  ngOnInit(): void {
    this.pais.verPais(this.router.snapshot.params['id']).subscribe((result: any) => {

      this.formPais =  new FormGroup({
        nombre: new FormControl(result['nombre']),
        poblacion: new FormControl(result['poblacion']),
      });

    });
  }

  editar(){

    this.pais.editarPais( this.router.snapshot.params['id'], this.formPais.value ).subscribe((result) => {

      this.nombreActualizado = this.formPais.value.nombre || null;

      this.mensaje = true;

      setTimeout(() => {
        this.mensaje = false;
      }, 3000);

    });

  }
}
