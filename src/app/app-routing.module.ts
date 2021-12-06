import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent,
  },
  {
    path: 'busqueda/:id',
    loadChildren: () =>
      import('./components/detalle-pelicula/detalle-pelicula.module').then(
        (m) => m.DetallePeliculaModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
