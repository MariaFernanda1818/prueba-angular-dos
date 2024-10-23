import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
    path: '',
    loadChildren: () => import('./modules/inicio.module').then((m) => m.InicioModule),
},
{
    path: 'formulario',
    loadChildren: () => import('./modules/formulario.module').then((m) => m),
}];
