import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-cita',
    templateUrl: './cita.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class CitaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
