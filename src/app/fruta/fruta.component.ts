import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html',
    styleUrls: [ './fruta.component.css' ]
})
export class FrutaComponent {
    /* Define las Propiedades (Atributos) */
    public nombre_componente: string;       // Tipo 'string' cadena
    public toneladas_vendidas: number;      // Tipo 'number' numero, soporta: enteros y decimales
    public existencia_frutas: boolean;      // Tipo 'boolean' soporta: true / false
    public existencia_semillas: boolean;
    public cualquier_cosa_1: any;           // Tipo 'any' soporta todos los tipos, como lo hace JavaScript
    public cualquier_cosa_2: any;
    public cualquier_cosa_3: any;

    // Define 'Arrays' con todos los tipos
    public frutas_acidas: Array<string>;
    public numeros: Array<number>;
    public falso_verdadero: Array<boolean>;
    public cualquier_cosa_4: Array<any>;
    //public cualquier_cosa_5: Array;           // Genera un Error
    public cualquier_cosa_6;

    /* Constructor */
    public constructor() {
        // Asigna los datos iniciales de las propiedades de la clase
        this .nombre_componente = 'Componente de fruta';       // Tipo 'string' cadena
        this .toneladas_vendidas = 30;                         // Tipo 'number' numero, soporta enteros y decimales
        this .existencia_frutas = true;                        // Tipo 'boolean' soporta true / false
        this .existencia_semillas = false;
        this .cualquier_cosa_1 = 'Bryan Paul';                 // Tipo 'any' soporta todos los tipos, como lo hace JavaScript
        this .cualquier_cosa_2 = 2;
        this .cualquier_cosa_3 = true;

        this .frutas_acidas = [ 'Bergamota', 'Clementina', 'Cidra', 'Lima', 'Limón', 'Mandarina', 'Naranja' ];
        this .numeros = [ 10, 4.6, -9, 3, 15.2 ];
        this .falso_verdadero = [ true, false, false, true, true ];
        this .cualquier_cosa_4 = [ true, 0, 'Mora', 13.0, false, 'Mango' ];
        //this .cualquier_cosa_5 = [ true, 0, 'Mora', 13.0, false, 'Mango' ];
        this .cualquier_cosa_6 = [ true, 0, 'Mora', 13.0, false, 'Mango' ];

        /* NOTAS:
            - Usualmente se utiliza para asignar valores a las propiedades o
              pedir parámetros iniciales ante la instanciación de un objeto,
              entre otras
            - Por convención y buenas práticas es que se propone el uso sugerido
        */

       console .log( 'Ejecuta el Constructor de la clase "Fruta"' );
       console .log( 'Frutas ácidas', this .frutas_acidas );
    }

    /* Método  que se ejecuta despues de cargar el componente pero el segundo después del constructor de la clase
       se usa para llamar métodos después del constructor, pero especial para cargar funcionalidades del Componente
       y demás funcionalidades del Core de Angular */
    ngOnInit() {
        /* En Angular es una buena practica llamar métodos de la misma clase dentro de 'ngOnInit' */
        this .saludar( this .cualquier_cosa_1 );
        this .cambiarResponsable( 'Juan David' );
        console .log( 'Ejecuta el "ngOnInit" de la clase "Fruta"' );
    }


    /* Métodos */
    private saludar( nombre ) {
        alert( `Hola soy ${ nombre } y el ${ this .nombre_componente } te saluda!` );
        console .log( 'Ejecuta Método "saludar"' );
    }
    private cambiarResponsable( nombre ) {
        this .cualquier_cosa_1 = nombre;
        console .log( 'Ejecuta Método "cambiarResponsable"' );
    }

}
