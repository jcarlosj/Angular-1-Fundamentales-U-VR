import { Component } from '@angular/core';

import { Empleado } from './empleado';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: [ './empleado.component.css' ]
})
export class EmpleadoComponent {
    /* Propiedades (Atributos) */
    public nombre_componente = 'Componente de Empleado';
    public empleado: Empleado;          // Define una propiedad de tipo 'Empleado' (Modelo de datos)

    /* Métodos de Angular */
    ngOnInit() {
        this .empleado = new Empleado( 'Juan David', 23, 'Desarrollador Junior WordPress', true );
        console .log( this .empleado );
    }
}
