import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-producto',
    templateUrl: './productos.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class ProductosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
