import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatIconModule]

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
