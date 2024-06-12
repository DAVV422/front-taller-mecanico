import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class ServiciosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
