import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-vehiculos',
    templateUrl: './vehiculos.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class VehiculosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
