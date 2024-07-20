import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/side-bar.service';
const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterModule, MATERIAL_MODULES],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  private readonly _sidebarService = inject(SidebarService);

  downloadPDF() {
    window.open(`/assets/pdf/statement.pdf`, '_blank');
  }

  openSidebar() {
    this._sidebarService.toggle();
  }

}
