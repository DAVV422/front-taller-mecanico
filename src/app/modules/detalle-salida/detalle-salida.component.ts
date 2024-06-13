import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-detalle-salida',
    templateUrl: './detalle-salida.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class DetalleSalidaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
