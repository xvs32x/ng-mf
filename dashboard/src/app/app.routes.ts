import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'offer',
    loadChildren: () => import('offer/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'partner',
    loadChildren: () => import('partner/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
