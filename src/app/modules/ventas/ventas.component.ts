import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-venta',
    templateUrl: './ventas.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class VentasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
