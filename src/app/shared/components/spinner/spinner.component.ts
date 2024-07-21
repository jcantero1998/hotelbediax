import { Component, inject } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  private readonly _spinnerService = inject(SpinnerService)
  isLoading = this._spinnerService.isLoading;
}
