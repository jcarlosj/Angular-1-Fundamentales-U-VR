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

    public deleteRopa( index: number ) : Array<string> {
        this .coleccion .splice( index, 1 );        // Para eliminar le indicamos el índice y la cantidad de elementos a eliminar apartir de ese 'index'

        return this .getRopa();
    }

}
