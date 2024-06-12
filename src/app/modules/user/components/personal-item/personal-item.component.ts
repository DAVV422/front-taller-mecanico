import { Component, Input } from '@angular/core';
import { Personal } from '../../interfaces/user.interface';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[personal-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './personal-item.component.html',
  styleUrl: './personal-item.component.scss'
})
export class PersonalItemComponent {
  @Input() auction = <Personal>{};
}
