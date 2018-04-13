import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html',
    styleUrls: [ './fruta.component.css' ]
})
export class FrutaComponent {
    /* Propiedades (Atributos) */
    public nombre_componente: string = 'Componente de fruta';       // Tipo 'string' cadena
    public toneladas_vendidas: number = 30;                         // Tipo 'number' numero, soporta: enteros y decimales
    public existencia_frutas: boolean = true;                       // Tipo 'boolean' soporta: true / false
    public existencia_semillas: boolean = false;
    public cualquier_cosa_1: any = 'Bryan Paul';                    // Tipo 'any' soporta todos los tipos, como lo hace JavaScript
    public cualquier_cosa_2: any = 2;
    public cualquier_cosa_3: any = true;

    // Listado de 'Arrays' con todos los tipos
    public frutas_acidas: Array<string> = [ 'Bergamota', 'Clementina', 'Cidra', 'Lima', 'Limón', 'Mandarina', 'Naranja' ];
    public numeros: Array<number> = [ 10, 4.6, -9, 3, 15.2 ];
    public falso_verdadero: Array<boolean> = [ true, false, false, true, true ];
    public cualquier_cosa_4: Array<any> = [ true, 0, 'Mora', 13.0, false, 'Mango' ];
    public cualquier_cosa_5: Array = [ true, 0, 'Mora', 13.0, false, 'Mango' ];
    public cualquier_cosa_6 = [ true, 0, 'Mora', 13.0, false, 'Mango' ];
}
