import { Component } from '@angular/core';
import { DetalleHeaderComponent } from '../../components/detalle-header/detalle-header.component';
import { DetalleTableComponent } from '../../components/detalle-table/detalle-table.component';
import { DetalleTableItemComponent } from '../../components/detalle-table-item/detalle-table-item.component';
import { DetalleServiceTableComponent } from '../../components/detalle-service-table/detalle-service-table.component';
import { DetalleServiceTableItemComponent } from '../../components/detalle-service-table-item/detalle-service-table-item.component';
import { NotaVenta } from '../../interfaces/venta.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_NOTA_VENTA_BY_ID } from 'src/app/core/constants/query';

@Component({
  selector: 'app-show-venta',
  standalone: true,
  imports: [DetalleHeaderComponent, DetalleTableComponent, DetalleTableItemComponent,
    DetalleServiceTableComponent, DetalleServiceTableItemComponent
  ],
  templateUrl: './show-venta.component.html',
  styleUrl: './show-venta.component.scss'
})
export class ShowVentaComponent {
  public notaVenta!: NotaVenta;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apollo: Apollo
  ){}

  ngOnInit() {
    let id: String = "";
    this.route.params.subscribe(
      (params: Params) => id = params['id']
    );
    this.apollo
      .watchQuery({
        query: GET_NOTA_VENTA_BY_ID,        
        variables: { id }
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getNotaVentaById != null){
          this.notaVenta = result.data.getNotaVentaById;
        }
      }); 
}
}
