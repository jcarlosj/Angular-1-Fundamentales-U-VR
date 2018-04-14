import { Component } from '@angular/core';

@Component({
    selector: 'app-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: [ './empleado.component.css' ]
})
export class EmpleadoComponent {
    /* Propiedades (Atributos) */
    public nombre_componente = 'Componente de Empleado';
    public listado_empleados = 'Jhonny, Juan, Bryan, Maura, Charles, Melisa';

}
