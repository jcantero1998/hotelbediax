import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatIconModule]

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

}
