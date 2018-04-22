import { Component } from '@angular/core';

import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ],
    providers: [ RopaService ]                  // Agregamos el Servicio que Provee los datos al Componente
})

export class HomeComponent {
    public title: string = 'Home';
    public listado_ropa: Array<string>;
    public prenda_a_guardar: string = null;
    /* Constructor
       Inyectamos el Servicio en la clase a través del constructor (Automáticamente
       Angular las instancia para que estén disponibles) */
    public constructor(
        private _ropaService: RopaService
    ) {}

    public ngOnInit() {
        this .listado_ropa = this ._ropaService .getRopa();
        console .log( 'COLECCIÓN: ', this .listado_ropa );
    }

    public guardarPrenda() {
        // Valida que la el valor de 'prenda_a_guardar' sea diferente de 'null'
        if( this .prenda_a_guardar != null ) {
            this ._ropaService .setRopa( this .prenda_a_guardar );
            this .prenda_a_guardar = null;
        }
    }

    public eliminarPrenda( index: number ) {

        if ( window .confirm( `¿Realmente quieres eliminar ${this .listado_ropa[ index ]}?` ) ) {
            this ._ropaService .deleteRopa( index );
        }

    }
}
