export interface Marca {
    id: string;
    nombre: string;
    porcentaje: number;
}

export interface Vehiculo {
    id: string;
    matricula: string;
    color: string;
    descripcion: string;
    modelo: string;
    marcaId: string;
}