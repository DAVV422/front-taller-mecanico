import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetalleSalidaRoutingModule } from './detalle-salida-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetalleSalidaRoutingModule,
    HttpClientModule
  ]
})
export class DetalleSalidaModule { }
