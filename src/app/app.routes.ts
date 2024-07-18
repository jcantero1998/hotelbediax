import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    children: [
      {
        path: 'destinations',
        title: 'Destinations',
        loadComponent: () => import('./dashboard/pages/destinations/destinations.component').then(c => c.DestinationsComponent)
      },
      {
        path: '',
        redirectTo: 'destinations',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo:  '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  },

];
