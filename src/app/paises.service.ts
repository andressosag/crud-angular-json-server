import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  url = 'http://localhost:3001/paises';
  constructor(private http:HttpClient) { }

  listarPaises(){
    return this.http.get( this.url );
  }

  registrarPais(data:any){
    return this.http.post( this.url, data);
  }

  eliminarPais( id:number ){
    return this.http.delete( `${this.url}/${id}` );
  }

  verPais( id:number ){
    return this.http.get( `${this.url}/${id}` );
  }

  editarPais(id:number, data:any){
    return this.http.put( `${this.url}/${id}`,data );
  }

}
