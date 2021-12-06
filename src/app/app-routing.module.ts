import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/tab2/tab2.module').then((m) => m.Tab2PageModule),
  },
  {
    path: ':id',
    component: DetallePeliculaComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
