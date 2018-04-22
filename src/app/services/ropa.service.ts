import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    /* Propiedades (Atributos) */
    public nombre_prenda = 'Camisa leñadora roja';

    /* Métodos */
    public prueba ( nombre_prenda: string ) {
        this .nombre_prenda = nombre_prenda;

        return this .nombre_prenda;
    }
}
