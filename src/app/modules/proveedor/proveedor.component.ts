import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-proveedor',
    templateUrl: './proveedor.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class ProveedorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
