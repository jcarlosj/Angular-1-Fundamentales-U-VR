import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },                 // Ruta por defecto  para página inicial /
    { path: 'home', component: HomeComponent },             // Ruta para el componente 'home'
    { path: 'empleado', component: EmpleadoComponent },     // Ruta para el componente 'empleado'
    { path: 'fruta', component: FrutaComponent },           // Ruta para el componente 'fruta'
    { path: 'contacto', component: ContactoComponent },     // Ruta para el componente 'contacto'
    { path: 'contacto/:page', component: ContactoComponent },// Ruta para el componente 'contacto' al que se le puede paar un parámetro por la URL
    { path: '**', component: HomeComponent }                // Ruta por defecto cualquier página ** (páginas no existentes, se puede crear un componente para despliegue de página 404 )
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule .forRoot( appRoutes );
