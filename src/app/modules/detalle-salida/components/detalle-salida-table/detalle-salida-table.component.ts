import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo,gql } from 'apollo-angular';
import { DetalleSalida } from 'src/app/modules/inteface/modelos';
import { DetalleSalidaItemComponent } from '../detalle-salida-item/detalle-salida-item.component';

const getAllDetalleSalida = gql`
    query getAllDetalleSalida {
      getAllDetalleSalida {
        id,
        cantidad,
        descripcion
      }
    }
  `;
@Component({
  selector: '[detalle-salida-table]',
  standalone: true,
  imports: [NgFor, DetalleSalidaItemComponent],
  templateUrl: './detalle-salida-table.component.html',
  styleUrl: './detalle-salida-table.component.scss'
})
export class DetalleSalidaTableComponent {

  public activeAuction: DetalleSalida[] = [];
  public detalleSalida: DetalleSalida[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllDetalleSalida,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllDetalleSalida != null){
          this.activeAuction = result.data.getAllDetalleSalida;  
        }
      });    
    
  }

  ngOnInit(): void {}
  
  newDetalleSalida(): void {
    this.router.navigate(['/taller/detallesalida/new']);
  }

}
