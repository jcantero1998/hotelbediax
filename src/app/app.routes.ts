import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'destinations',
    title: 'Destinations',
    loadComponent: () => import('./pages/destinations/destinations.component').then(c => c.DestinationsComponent)
  },
  {
    path: '',
    redirectTo: 'destinations',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'destinations'
  },

];
