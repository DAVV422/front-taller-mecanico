import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Apollo } from 'apollo-angular';
import { GET_ALL_CLIENTES, GET_ALL_PERSONAL, GET_CLIENTE_BY_ID, GET_PERSONAL_BY_ID, USUARIO_BY_ID } from 'src/app/core/constants/query';
import { Usuario } from 'src/app/modules/auth/interfaces/response/login.interface';
import { Cliente, Personal, User } from 'src/app/modules/user/interfaces/user.interface';
import { Cita } from '../../interface/cita.interface';

@Component({
  selector: '[cita-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './cita-table-item.component.html',
  styleUrl: './cita-table-item.component.scss'
})
export class CitaTableItemComponent implements OnInit {
  @Input() auction = <Cita>{};
  public cliente = <User>{};
  public personal = <Personal>{};

  constructor(
    private readonly apollo: Apollo
  ){     
  }
  
  ngOnInit(): void {      
    this.apollo.watchQuery({
      query: USUARIO_BY_ID, 
      variables: {
        id: this.auction.usuarioId
      }       
    }).valueChanges.subscribe(( result: any) => {
      console.log(result)
      if(result.data.usuarioById != null){
        this.cliente = result.data.usuarioById;  
      }
    }); 
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
