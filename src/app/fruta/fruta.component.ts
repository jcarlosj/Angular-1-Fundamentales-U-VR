import { Component } from '@angular/core';

@Component({
    selector: 'app-fruta',
    templateUrl: './fruta.component.html',
    styleUrls: [ './fruta.component.css' ]
})
export class FrutaComponent {
    /* Propiedades (Atributos) */
    nombre_componente = 'Componente de fruta';                  // Si no se define el tipo de visibilidad se asume que es 'public'
    public listado_frutas_acidas = 'Bergamota, Clementina, Cidra, Lima, Limón, Mandarina, Naranja';
    private listado_frutas_neutras = 'Aceituna, Avellana, Coco, Maní, Cacao, Aguacate, Castaña, Almendra, Nuez y Macadamia';
    protected listado_frutas_dulces = 'Melón, Plátano, Sandía, Manzana Golden, Ciruelas, Uvas, Albaricoque, Chirimoya, Caqui, Grosella, Granada';

    /* NOTA: La visibilidad de cada una de las propiedades solo funcionan de cara
             a otras clases, no será tenida en cuenta por TypeScript al desplegarla
             en vista del componente */
}
