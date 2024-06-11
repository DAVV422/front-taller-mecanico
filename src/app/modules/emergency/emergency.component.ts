import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-emergency',
    templateUrl: './emergency.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class EmergencyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
