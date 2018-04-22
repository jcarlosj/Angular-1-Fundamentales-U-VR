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
    public prenda: string;
    /* Constructor
       Inyectamos el Servicio en la clase a través del constructor (Automáticamente
       Angular las instancia para que estén disponibles) */
    public constructor(
        private _ropaService: RopaService
    ) {}

    public ngOnInit() {
        this .prenda = this ._ropaService .prueba( 'Camisa polo azul' );
        console .log( 'PRENDA: ', this .prenda );
    }
}
