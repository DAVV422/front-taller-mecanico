import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { salidasRoutingModule } from './salida-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { entradaRoutingModule } from './entrada-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    entradaRoutingModule,
    HttpClientModule
  ]
})
export class EntradaModule { }
