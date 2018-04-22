import { Injectable } from '@angular/core';

@Injectable()

export class RopaService {
    /* Propiedades (Atributos) */
    public nombre_prenda = 'Camisa leñadora roja'

    /* Métodos */
    public prueba () {

        return this .nombre_prenda;
    }
}
