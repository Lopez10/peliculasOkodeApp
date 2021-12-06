import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './detalle-pelicula.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [DetallePeliculaComponent],
})
export class DetallePeliculaModule {}
