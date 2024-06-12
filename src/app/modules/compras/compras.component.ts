import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-venta',
    templateUrl: './compras.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class ComprasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
