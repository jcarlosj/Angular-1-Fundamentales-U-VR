/* Esta clase representa el modelo de datos (models) */
export class Empleado {
    /* Constructor */
    public constructor(
        public nombre: string,
        public edad: number,
        public cargo: string,
        public contratado: boolean,
        public estado_seleccion: string
    ) {}
}
