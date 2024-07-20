import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, effect, inject, input, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule, } from '@angular/material/table';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { DestinationsFilterComponent } from "../destinations-filter/destinations-filter.component";
import { ColumnKeys, Destination } from 'src/app/core/models/destination.model';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { DestinationTypePipe } from "../../../../shared/pipes/destination-type.pipe";
import { DatePipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const MATERIAL_MODULES = [MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatIconModule];
@Component({
  selector: 'app-destinations-table',
  standalone: true,
  imports: [MATERIAL_MODULES, JsonPipe, DestinationsFilterComponent, DestinationTypePipe, DatePipe],
  templateUrl: './destinations-table.component.html',
  styleUrl: './destinations-table.component.css'
})
export class DestinationsTableComponent<T> implements OnInit {

  data = input.required<T[]>();

  displayedColumns: ColumnKeys<Destination> = ['Id', 'Name','Description', 'CountryCode', 'Type', 'LastModify', 'action'];
  sortableColumns: ColumnKeys<Destination> = ['Id', 'Name','Description', 'CountryCode', 'Type', 'LastModify'];

  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal('');

  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);
  private readonly _destinationService = inject(DestinationService);
  private readonly _modalService = inject(ModalService);
  private readonly _snackBar = inject(SnackBarService);
  private readonly _destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      if (this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter();
      } else {
        this.dataSource.filter = '';
      }

      if (this.data()) {
        this.dataSource.data = this.data();
      }
    }, {allowSignalWrites: true})
   }

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  openEditForm(data: T): void {
    this._modalService.openModal<ModalComponent, T>(ModalComponent, data, true);
  }

  selectedRow(data: T): void {
    this.openEditForm(data);
  }

  deleteDestination(id: number): void {
    const confirmation = confirm("Are you sure you want to delete this destination?");
    if (!confirmation) return;

    this._destinationService.deleteDestinationById(id)
    .pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(deleteResult => {
      this._snackBar.showSnackBar(deleteResult ? 'Destination deleted successfully' : 'Destination not deleted');
    });
  }

}
