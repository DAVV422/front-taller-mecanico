export interface Salida {
    id: string,
    fecha: string,
    motivo: string,
    hora: string
}
export interface DetalleSalida {
    id: string,
    cantidad: number,
    descripcion:string
}
export interface Proveedor {
    id: string,
    nombre: string,
    direccion: string,
    celular: string,
    email: string,
    descripcion: string
}

export interface Producto {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number,
    stock: string
}