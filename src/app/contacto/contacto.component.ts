import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: [ './contacto.component.css' ]
})

export class ContactoComponent {
    title = 'Contacto';
    public parametro;

    /* Constructor
       Inyectamos estos Modulos en la clase a través del constructor (Automáticamente
       Angular las instancia para que estén disponibles) */
    public constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    public ngOnInit() {
        /* Recogemos los parámetros de la URL, usando un ciclo, cuando termine de inicializar el compomente */
        this ._route .params .forEach( ( params: Params ) => {          // Deben usarse para los Callbacks la sintáxis 'Arrow Function'
            this .parametro = params[ 'page' ];                         // Nombre del parámetro en la ruta, para acceder a este campo en el 'Array' de params
            console .log( params );
        });
    }

    public redireccionar() {
        // Con el método 'navigate' de 'router' se puede indicar la ruta y el parámetro que se desea pasar a la misma
        this ._router .navigate([ '/contacto', 'parametro-de-la-url' ]);
    }

}
