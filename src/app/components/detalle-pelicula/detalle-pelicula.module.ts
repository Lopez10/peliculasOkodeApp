import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './detalle-pelicula.component';
import { DetallePeliculaRoutingModule } from './detalle-pelicula-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetallePeliculaRoutingModule,
  ],
  declarations: [DetallePeliculaComponent],
})
export class DetallePeliculaModule {}
