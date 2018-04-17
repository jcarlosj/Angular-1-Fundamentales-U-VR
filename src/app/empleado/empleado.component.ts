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
    public equipo:Array<Empleado>;      // Define una propiedad 'Array' de tipo Empleado (Listado de 'registros' de empleados)
    public contradado: boolean; // Define una propiedad de tipo 'boolean'

    /* Constructor */
    constructor() {
        // Las definiciones por buenas prácticas se hacen en el constructor
        this .empleado = new Empleado( 'Juan David', 23, 'Desarrollador Junior WordPress', true );
        this .equipo = [
            new Empleado( 'Alejandro', 25, 'Desarrollador Back-End WordPress', true ),
            new Empleado( 'Yorkasta', 27, 'Desarrollador Front-End para WordPress', true ),
            new Empleado( 'Melisa', 23, 'Experta Marketing Digital', false )
        ];
        this .contradado = false;
    }

    /* Métodos de Angular */
    ngOnInit() {
        // Si se hace una petición de datos con AJAX, las definiciones deben hacerse en el método de inicialización de Angular 'ngOnInit'
        console .log( this .empleado );
        console .log( this .equipo );
    }

    public cambiaEstadoContradado( valor ) {
        this .contradado = valor;
    }
}
