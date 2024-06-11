import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { User } from '../../interfaces/user.interface';

@Component({
    selector: '[users-table-item]',
    templateUrl: './users-table-item.component.html',
    standalone: true,
    imports: [AngularSvgIconModule, CurrencyPipe],
})
export class UsersTableItemComponent implements OnInit {  
  @Input() auction = <User>{};

  constructor() {}

  ngOnInit(): void {}
}
