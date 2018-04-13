import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    template: `
        <h2>{{ nombre_componente }}</h2>
        <p>{{ listado_frutas }}</p>
    `
})
export class FrutaComponent {
    /* Propiedades (Atributos) */
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Mango, Guanabana, Fresa, Cereza, Papaya';
    /* NOTA: Para poder visualizar las propiedades de la clase en la plantilla
             Angular se vale de las llaves dobles {{ }} para desplegarlas, esto
             se conoce con el nombre de "Binding por interpolación" */
}
