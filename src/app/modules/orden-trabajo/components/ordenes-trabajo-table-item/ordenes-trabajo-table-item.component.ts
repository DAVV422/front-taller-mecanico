import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OrdenDeTrabajo } from '../../interfaces/orden-trabajo.interface';
import { Personal } from 'src/app/modules/user/interfaces/user.interface';
import { Apollo } from 'apollo-angular';
import { GET_PERSONAL_BY_ID } from '../../../../core/constants/query';

@Component({
  selector: '[ordenes-trabajo-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './ordenes-trabajo-table-item.component.html',
  styleUrl: './ordenes-trabajo-table-item.component.scss'
})
export class OrdenesTrabajoTableItemComponent {
  @Input() auction = <OrdenDeTrabajo>{};
  public personal = <Personal>{};

  constructor(
    private readonly apollo: Apollo
  ){
    this.apollo.watchQuery({
      query: GET_PERSONAL_BY_ID,
      variables: {
        id: this.auction.personalId
      }     
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.getPersonalById != null){
        this.personal = result.data.getPersonalById;  
      }
    });
  }
}
