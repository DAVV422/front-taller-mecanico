import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-entrada',
    templateUrl: './entrada.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class EntradaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
