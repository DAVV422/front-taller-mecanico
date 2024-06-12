import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-inventario',
    templateUrl: './inventario.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class InventarioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
