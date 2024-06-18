import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { OrdenDeTrabajo } from '../../interfaces/orden-trabajo.interface';
import { Personal } from 'src/app/modules/user/interfaces/user.interface';
import { Apollo } from 'apollo-angular';
import { GET_PERSONAL_BY_ID } from '../../../../core/constants/query';
import { Router } from '@angular/router';

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
    private readonly apollo: Apollo,
    private readonly router: Router
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

  edit(){
    this.router.navigate(['/taller/orden-trabajo/edit', this.auction.id]);
  }
}
