import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyRoutingModule } from './emergency-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmergencyRoutingModule,
    HttpClientModule
  ]
})
export class EmergencyModule { }
