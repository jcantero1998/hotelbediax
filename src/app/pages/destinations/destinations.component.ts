import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DestinationsFilterComponent } from "./components/destinations-filter/destinations-filter.component";
import { DestinationsTableComponent } from "./components/destinations-table/destinations-table.component";
import { RouterModule } from '@angular/router';
const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatIconModule]

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterModule, MATERIAL_MODULES, DestinationsFilterComponent, DestinationsTableComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

}
