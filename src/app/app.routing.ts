import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

const appRoutes: Routes = [
    { path: '', component: EmpleadoComponent },             // Ruta por defecto  para página inicial /
    { path: 'empleado', component: EmpleadoComponent },     // Ruta para el componente 'empleado'
    { path: 'fruta', component: FrutaComponent },           // Ruta para el componente 'fruta'
    { path: '**', component: EmpleadoComponent }            // Ruta por defecto cualquier página ** (páginas no existentes, se puede crear un componente para despliegue de página 404 )
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule .forRoot( appRoutes );
