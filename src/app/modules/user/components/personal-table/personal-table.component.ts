import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Personal } from '../../interfaces/user.interface';
import { NgFor } from '@angular/common';
import { PersonalItemComponent } from '../personal-item/personal-item.component';


const getAllPersonal = gql`
    query getAllPersonal {
      getAllPersonal {
        apellido,
        celular,
        ci,
        direccion,
        fechaNacimiento,
        id,
        nombre,
        usuarioId
      }
    }
  `;
@Component({
  selector: '[personal-table]',
  standalone: true,
  imports: [NgFor, PersonalItemComponent],
  templateUrl: './personal-table.component.html',
  styleUrl: './personal-table.component.scss'
})
export class PersonalTableComponent {
  public activeAuction: Personal[] = [];
  public personal: Personal[] = [];

  constructor(
    private router: Router,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllPersonal,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.getAllPersonal != null){
          this.activeAuction = result.data.getAllPersonal;  
        }
      });    
    
  }

  ngOnInit(): void {}

  newPersonal(): void {
    this.router.navigate(['/taller/users/personal/new']);
  }
}
