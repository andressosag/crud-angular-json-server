import { RegistrarPaisComponent } from './componentes/registrar-pais/registrar-pais.component';
import { EditarPaisComponent } from './componentes/editar-pais/editar-pais.component';
import { ListarPaisComponent } from './componentes/listar-pais/listar-pais.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'listar', component: ListarPaisComponent
  },
  {
    path:'registrar', component: RegistrarPaisComponent
  },
  {
    path:'editar/:id', component: EditarPaisComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
