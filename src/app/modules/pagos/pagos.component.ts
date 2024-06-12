import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-pagos',
    templateUrl: './pagos.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class PagosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
