import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorsRoutingModule } from './proveedor-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProveedorsRoutingModule,HttpClientModule
  ]
})
export class ProveedorModule { }
