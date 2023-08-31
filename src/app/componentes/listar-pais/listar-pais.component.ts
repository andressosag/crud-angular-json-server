import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../paises.service';

@Component({
  selector: 'app-listar-pais',
  templateUrl: './listar-pais.component.html',
  styleUrls: ['./listar-pais.component.css']
})
export class ListarPaisComponent implements OnInit {

  constructor(private pais:PaisesService) {}

  dataPaises:any = [];

  mensaje:boolean = false;
  nombreEliminado: string | null = null;

  ngOnInit(): void {
    this.pais.listarPaises().subscribe( ( data ) => {
      this.dataPaises = data;
    });
  }

  eliminar( pais_id:number,nombre:string ){

    this.pais.eliminarPais(pais_id).subscribe( (result) => {

      this.ngOnInit();

      this.mensaje = true;

      this.nombreEliminado = nombre || null;

      setTimeout(() => {
        this.mensaje = false;
      }, 3000);

    });

  }
}
