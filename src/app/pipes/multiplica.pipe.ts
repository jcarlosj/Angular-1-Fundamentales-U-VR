import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'multiplica' })

export class MultiplicaPipe implements PipeTransform {

    /* Método obligatorio de la Interface 'PipeTransform' */
    public transform( numero1, numero2 ) {
        let valor1 = parseInt( numero1 ),
            valor2 = parseInt( numero2 );

        return `La multiplicación de ${valor1} por ${valor2} es igual a ${valor1*valor2}`;
    }
}
