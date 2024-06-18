import { Component, Input, OnDestroy } from '@angular/core';
import { DetalleVentaProducto } from '../../interfaces/venta.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';
import { DELETE_DETALLE_VENTA_PRODUCTO } from 'src/app/core/constants/mutation';
import { Apollo } from 'apollo-angular';

@Component({
  selector: '[detalle-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './detalle-table-item.component.html',
  styleUrl: './detalle-table-item.component.scss'
})
export class DetalleTableItemComponent implements OnDestroy {
  @Input() auctionProducto = <DetalleVentaProducto>{};  
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
      mutation: DELETE_DETALLE_VENTA_PRODUCTO,
      variables: { id }
    }).subscribe(
      ({data}) => {
        if( data ) {
          console.log("Detalle Eliminado");
          window.location.reload();
        }        
      }
    );    
  }
}
