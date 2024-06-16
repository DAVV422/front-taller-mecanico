export interface PlanDePago {
    id: string;
    fechaInicio: string;
    cantidadCuotas: number;
    montoCuota: number;
    tiempoCuota: string;
    tipo: string;
    notaVentaId: string;
}

export interface DetalleDePago {
    id: string;
    fechaPago: string;
    monto: number;
    estadoPago: string;
    planDePagoId: string;
}