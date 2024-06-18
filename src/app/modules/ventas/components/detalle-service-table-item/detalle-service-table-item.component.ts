import { Component, Input } from '@angular/core';
import { DetalleVentaServicio } from '../../interfaces/venta.interface';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { DELETE_DETALLE_VENTA_SERVICIO } from 'src/app/core/constants/mutation';

@Component({
  selector: '[detalle-service-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './detalle-service-table-item.component.html',
  styleUrl: './detalle-service-table-item.component.scss'
})
export class DetalleServiceTableItemComponent {
  @Input() auctionServicio = <DetalleVentaServicio>{};  

  constructor(
    private readonly apollo: Apollo
  ){}
  eliminar(id: String){
    this.apollo.mutate({ 
      mutation: DELETE_DETALLE_VENTA_SERVICIO,
      variables: { id }
    }).subscribe(
      ({data}) => {
        console.log(id);
        console.log(data);
        if( data ) {
          console.log("Detalle Eliminado");
        }        
      }
    );    
  }
}
