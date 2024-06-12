import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-orden-trabajo',
    templateUrl: './orden-trabajo.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class OrdenTrabajoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
