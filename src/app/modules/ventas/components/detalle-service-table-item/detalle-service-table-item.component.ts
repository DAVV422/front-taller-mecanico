import { Component, Input, OnDestroy } from '@angular/core';
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
export class DetalleServiceTableItemComponent implements OnDestroy {
  @Input() auctionServicio = <DetalleVentaServicio>{};  
  public query!: any;

  constructor(
    private readonly apollo: Apollo
  ){}
  ngOnDestroy(): void {
    try {
      this.query.unsubscribe();
    } catch (error) {
      console.log(error);
    } 
  }

  eliminar(id: String){
    this.query = this.apollo.mutate({ 
      mutation: DELETE_DETALLE_VENTA_SERVICIO,
      variables: { id }
    }).subscribe(
      ({data}) => {
        console.log(id);
        console.log(data);
        if( data ) {
          console.log("Detalle Eliminado");
          window.location.reload();
        }        
      }
    );    
  }
}
