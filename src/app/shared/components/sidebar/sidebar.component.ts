import { Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidebarService } from '../../services/side-bar.service';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  private readonly _sidebarService = inject(SidebarService);
  private readonly _destroyRef = inject(DestroyRef);

  ngOnInit() {
    this._sidebarService.toggle$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(() => this.sidenav.toggle());
  }

  close() {
    this.sidenav.close();
  }
}
