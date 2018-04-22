import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    /* Propiedades (Atributos) */
    public nombre_prenda = 'Camisa leñadora roja';
    public coleccion = [ 'Pantalones cargo caqui', this .nombre_prenda, 'Medias de lana grises' ];

    /* Métodos */
    public prueba ( nombre_prenda: string ) {
        this .nombre_prenda = nombre_prenda;

        return this .nombre_prenda;
    }

    public setRopa( nombre_prenda: string ) : Array<string> {
        this .coleccion .push( nombre_prenda );     // Agrego elemento al 'Array'

        return this .getRopa();
    }

    public getRopa() : Array<string> {
        return this .coleccion;
    }

}
