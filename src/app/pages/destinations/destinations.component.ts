import { Component, DestroyRef, EnvironmentInjector, inject, OnInit, runInInjectionContext, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DestinationsFilterComponent } from "./components/destinations-filter/destinations-filter.component";
import { DestinationsTableComponent } from "./components/destinations-table/destinations-table.component";
import { RouterModule } from '@angular/router';
import { Destination } from 'src/app/core/models/destination.model';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatIconModule]

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [RouterModule, MATERIAL_MODULES, DestinationsFilterComponent, DestinationsTableComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent implements OnInit{

  destinations = signal<Destination[]>([]);

  private readonly _destinationService = inject(DestinationService);
  private readonly _modalService = inject(ModalService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _injector = inject(EnvironmentInjector);

  ngOnInit() {
    runInInjectionContext( this._injector, () => {
      this.getDestinations();
    });
  }

  getDestinations() {
    this._destinationService.getDestinations()
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        tap((destinations: Destination[]) => this.destinations.set(destinations))
      )
    .subscribe();
  }

  onClickAddDestination(): void {
    this._modalService.openModal<ModalComponent>(ModalComponent);
  }

}
