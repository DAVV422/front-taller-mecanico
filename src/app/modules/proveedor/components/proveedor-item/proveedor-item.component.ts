import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Proveedor } from 'src/app/modules/inteface/modelos';

@Component({
  selector: '[proveedor-table-item]',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
  templateUrl: './proveedor-item.component.html',
  styleUrl: './proveedor-item.component.scss'
})
export class ProveedorItemComponent implements OnInit {
  @Input() auction = <Proveedor>{};

  constructor() {}

  ngOnInit(): void {}

}
