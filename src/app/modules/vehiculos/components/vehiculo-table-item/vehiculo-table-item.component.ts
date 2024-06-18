import { Component, Input } from '@angular/core';
import { Vehiculo } from '../../interfaces/vehiculos.interface';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { DELETE_VEHICULO } from 'src/app/core/constants/mutation';

@Component({
  selector: '[vehiculo-table-item]',
  standalone: true,
  imports: [CurrencyPipe, AngularSvgIconModule],
  templateUrl: './vehiculo-table-item.component.html',
  styleUrl: './vehiculo-table-item.component.scss'
})
export class VehiculoTableItemComponent {
  @Input() auction = <Vehiculo>{};

  constructor(
    private readonly apollo: Apollo
  ){}

  eliminar(id: String){
    this.apollo.mutate({ 
      mutation: DELETE_VEHICULO,
      variables: { id }
    }).subscribe(
      ({data}) => {
        console.log(id);
        console.log(data);
        if( data ) {
          console.log("Marca Eliminada");
        }        
      }
    );
  }
}
