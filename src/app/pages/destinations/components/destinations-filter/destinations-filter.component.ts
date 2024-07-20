import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput];
@Component({
  selector: 'app-destinations-filter',
  standalone: true,
  imports: [FormsModule, MATERIAL_MODULES],
  templateUrl: './destinations-filter.component.html',
  styleUrl: './destinations-filter.component.css'
})
export class DestinationsFilterComponent {
  filter = model('');
  label = input<string>('Filter');
  placeholder = input<string>('Ex. name');
}
