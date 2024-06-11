import { Component } from '@angular/core';
import { SignUpComponent } from '../../../auth/pages/sign-up/sign-up.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ ButtonComponent, FormsModule, AngularSvgIconModule, RouterLink ],
  templateUrl: './create-emergency.component.html',
  styleUrl: './create-emergency.component.scss'
})
export class CreateEmergencyComponent {

}
