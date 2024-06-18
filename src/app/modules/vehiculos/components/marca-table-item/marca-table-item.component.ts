import { Component, Input } from '@angular/core';
import { Marca } from '../../interfaces/vehiculos.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';
import { Apollo } from 'apollo-angular';
import { DELETE_MARCA } from 'src/app/core/constants/mutation';
import { Router } from '@angular/router';

@Component({
  selector: '[marca-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './marca-table-item.component.html',
  styleUrl: './marca-table-item.component.scss'
})
export class MarcaTableItemComponent {
  @Input() auction = <Marca>{};

  constructor(
    private readonly router: Router,
    private readonly apollo: Apollo
  ){}

  eliminar(id: String){
    this.apollo.mutate({ 
      mutation: DELETE_MARCA,
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
