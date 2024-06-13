import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ServiciosTableItemComponent } from '../servicios-table-item/servicios-table-item.component';
import { Servicio } from '../../interfaces/servicio.interface';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_ALL_SERVICIOS } from 'src/app/core/constants/query';

@Component({
  selector: '[servicio-table]',
  standalone: true,
  imports: [NgFor, ServiciosTableItemComponent],
  templateUrl: './servicio-table.component.html',
  styleUrl: './servicio-table.component.scss'
})
export class ServicioTableComponent {
  public activeAuction: Servicio[] = [];
  public personal: Servicio[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: GET_ALL_SERVICIOS,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllServicios != null){
          this.activeAuction = result.data.getAllServicios;
        }
      });    
    
  }

  ngOnInit(): void {}

  newServicio(): void {
    this.router.navigate(['/taller/servicios/new']);
  }
}
