export interface NotaVenta {
    id: string;
    fecha: string;
    total: number;
    saldo: number;
    interes: number;
    subtotal: number;
    codigoSeguimiento: string;
}

export interface DetalleVentaServicio {
    id: string;
    monto: number;
    servicioId: string;
    notaVentaId: string;
}

export interface DetalleVentaProducto {
    id: string;
    precioUnitario: number
    montoTotal: number;
    productoId: string;
    notaVentaId: string;
}