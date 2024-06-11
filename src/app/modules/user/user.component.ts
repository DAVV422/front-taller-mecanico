import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    standalone: true,
    imports: [RouterOutlet, AngularSvgIconModule],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
