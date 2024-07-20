import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { DestinationService } from 'src/app/core/services/destination.service';
import { ModalService } from './modal.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { DestinationType, DestinationTypes } from 'src/app/core/models/destination.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput, MatDialogModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule]
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  destinationForm!: FormGroup;
  destinationTypes: DestinationTypes[] = [];

  private readonly _fb = inject(FormBuilder);
  private readonly _matDialog = inject(MAT_DIALOG_DATA);
  private readonly _destinationService = inject(DestinationService);
  private readonly _modalService = inject(ModalService);
  private readonly _snackBar = inject(SnackBarService);

  ngOnInit(): void {
    this._buildForm();
    this.destinationTypes = this._destinationService.getDestinationTypes();
    this.destinationForm.patchValue(this._matDialog.data);
  }

  async onSubmit() {
    let message = '';
    const destination = this.destinationForm.value;

    if (this._matDialog.data) {
      const updated: boolean = await firstValueFrom(this._destinationService.updateDestination(destination));
      message = updated ? "Destination updated successfully" : "Destination not updated";
    } else {
      const created: boolean = await firstValueFrom(this._destinationService.createDestination(destination));
      message = created ? "Destination created successfully" : "Destination not created";
    }
    this._snackBar.showSnackBar(message);
    this._modalService.closeModal();
  }

  getTitle(): string {
    return this._matDialog.data ? 'Edit Destination' : 'Add Destination';
  }

  private _buildForm(): void {
    this.destinationForm = this._fb.nonNullable.group({
      Id: [''],
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      CountryCode: ['', Validators.required],
      Type: [DestinationType.City, Validators.required],
    });
  }
}
