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