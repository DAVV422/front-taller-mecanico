import { Component, OnInit } from '@angular/core';
import { Nft } from '../../../dashboard/models/nft';
import { NgFor } from '@angular/common';
import { UsersTableItemComponent } from '../users-table-item/users-table-item.component';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { Apollo, gql } from 'apollo-angular';

const getAllusers = gql`
    query getAllusers {
      allUsuarios {
        email,
        id,
        nombreUsuario,
        tipo,
      }
    }
  `;
@Component({
    selector: '[users-table]',
    templateUrl: './users-table.component.html',
    standalone: true,
    imports: [NgFor, UsersTableItemComponent],
})
export class UserTableComponent implements OnInit {
  public activeAuction: User[] = [];
  public users: User[] = [];

  constructor(
    private router: Router, private userService: UserService,
    private readonly apollo: Apollo
  ) {        
    this.apollo
      .watchQuery({
        query: getAllusers,        
      }).valueChanges.subscribe(( result: any) => {
        if(result.data.allUsuarios != null){
          this.activeAuction = result.data.allUsuarios;  
        }
      });    
    
  }

  ngOnInit(): void {}

  newUser(): void {
    this.router.navigate(['/auth/sign-up']);
  }
}
