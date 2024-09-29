import { Routes } from '@angular/router';
import { ImageRecComponent } from './image-rec/image-rec.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: ImageRecComponent },
  {
    path: 'image-rec',
    loadComponent: () =>
      import('./image-rec/image-rec.component').then(
        (m) => m.ImageRecComponent
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
