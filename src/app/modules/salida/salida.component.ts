import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-salida',
    templateUrl: './salida.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class SalidaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
