import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Cliente } from '../../interfaces/user.interface';

@Component({
  selector: '[cliente-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './cliente-item.component.html',
  styleUrl: './cliente-item.component.scss'
})
export class ClienteItemComponent {
  @Input() auction = <Cliente>{};
}
