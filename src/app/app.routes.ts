import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'destinations',
    title: 'Destinations',
    loadComponent: () => import('./pages/destinations/destinations.component').then(c => c.DestinationsComponent)
  },
  {
    path: 'settings',
    title: 'Settings',
    loadComponent: () => import('./pages/settings/settings.component').then(c => c.SettingsComponent)
  },
  {
    path: 'help',
    title: 'Help',
    loadComponent: () => import('./pages/help/help.component').then(c => c.HelpComponent)
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
