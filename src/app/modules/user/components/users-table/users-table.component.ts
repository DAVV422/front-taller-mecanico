import { Component, OnInit } from '@angular/core';
import { Nft } from '../../../dashboard/models/nft';
import { NgFor } from '@angular/common';
import { UsersTableItemComponent } from '../users-table-item/users-table-item.component';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
    selector: '[users-table]',
    templateUrl: './users-table.component.html',
    standalone: true,
    imports: [NgFor, UsersTableItemComponent],
})
export class UserTableComponent implements OnInit {
  public activeAuction: User[] = [];
  public users: User[] = [];

  constructor(private router: Router, private userService: UserService) {    
    // this.users = userService.getAll();
    this.activeAuction = [
      {
        id: 1,
        name: "Diego",
        lastName: "Vargas",
        birthdate: "1998-09-20",
        grade: "Bombero III",
        cellphone: "78913471",
        email: "diego@live.com",
        role: "admin"
      },
      {
        id: 2,
        name: "Heidy",
        lastName: "Olmos",
        birthdate: "2000-03-29",
        grade: "Bombero I",
        cellphone: "71348134",
        email: "heidy@live.com",
        role: "basic"
      },
      {
        id: 3,
        name: "Carlos",
        lastName: "Barrientos",
        birthdate: '1992-11-30',
        grade: "Sub Oficial",
        cellphone: "61347139",
        email: "carlos@live.com",
        role: "basic"
      },
      {
        id: 4,
        name: "Betto",
        lastName: "Cruz",
        birthdate: "1988-02-25",
        grade: "Teniente",
        cellphone: "67834291",
        email: "betto@live.com",
        role: "basic"
      },
      {
        id: 5,
        name: "Keisha",
        lastName: "Bello",
        birthdate: "1997-05-10",
        grade: "Bombero II",
        cellphone: "76213582",
        email: "keisha@live.com",
        role: "basic"
      }
    ]
    
    
  }

  ngOnInit(): void {}

  newUser(): void {
    this.router.navigate(['/auth/sign-up']);
  }
}
