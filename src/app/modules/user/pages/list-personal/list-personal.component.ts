import { Component } from '@angular/core';
import { PersonalHeaderComponent } from '../../components/personal-header/personal-header.component';
import { PersonalTableComponent } from '../../components/personal-table/personal-table.component';
import { PersonalItemComponent } from '../../components/personal-item/personal-item.component';

@Component({
  selector: 'app-list-personal',
  standalone: true,
  imports: [
    PersonalHeaderComponent,
    PersonalTableComponent,
    PersonalItemComponent
  ],
  templateUrl: './list-personal.component.html',
  styleUrl: './list-personal.component.scss'
})
export class ListPersonalComponent {

}
