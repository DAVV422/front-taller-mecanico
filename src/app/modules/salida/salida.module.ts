import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { salidasRoutingModule } from './salida-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    salidasRoutingModule,
    HttpClientModule
  ]
})
export class SalidaModule { }
