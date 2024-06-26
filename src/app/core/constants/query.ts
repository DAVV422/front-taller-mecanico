import { gql } from "apollo-angular";

export const ALL_USUARIOS = gql`
  query allUsuarios {
    allUsuarios {
      id,
      nombreUsuario,
      email,
      password,
      tipo
    }
  }
`;

export const USUARIO_BY_ID = gql`
  query usuarioById($id: ID!) {
    usuarioById(id: $id) {
      id,
      nombreUsuario,
      email,
      password,
      tipo
    }
  }
`;

export const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id,
      nombreUsuario,
      email,
      password,
      tipo
    }
  }
`;

export const GET_ALL_PERSONAL = gql`
  query getAllPersonal {
    getAllPersonal {
      id,
      nombre,
      apellido,
      ci,
      direccion,
      celular,
      fechaNacimiento,
      usuarioId
    }
  }
`;

export const GET_PERSONAL_BY_ID = gql`
  query getPersonalById($id: ID!) {
    getPersonalById(id: $id) {
      id,
      nombre,
      apellido,
      ci,
      direccion,
      celular,
      fechaNacimiento,
      usuarioId
    }
  }
`;

export const GET_ALL_CLIENTES = gql`
  query getAllClientes {
    getAllClientes {
      id,
      nombre,
      apellido,
      celular,
      nit,
      usuarioId
    }
  }
`;

export const GET_CLIENTE_BY_ID = gql`
  query getClienteById($id: ID!) {
    getClienteById(id: $id) {
      id,
      nombre,
      apellido,
      celular,
      nit,
      usuarioId
    }
  }
`;

export const GET_ALL_CITAS = gql`
  query getAllCitas {
    getAllCitas {
      id,
      fecha,
      hora,
      estado,
      usuarioId,
      personalId
    }
  }
`;

export const GET_CITA_BY_ID = gql`
  query getCitaById($id: ID!) {
    getCitaById(id: $id) {
      id,
      fecha,
      hora,
      estado,
      usuarioId,
      personalId
    }
  }
`;

export const GET_ALL_SERVICIOS = gql`
  query getAllServicios {
    getAllServicios {
      id,
      nombre,
      descripcion,
      tipo,
      tarifaBase
    }
  }
`;

export const GET_SERVICIO_BY_ID = gql`
  query getServicioById($id: ID!) {
    getServicioById(id: $id) {
      id,
      nombre,
      descripcion,
      tipo,
      tarifaBase
    }
  }
`;

export const GET_ALL_NOTAS_VENTA = gql`
  query getAllNotasVenta {
    getAllNotasVenta {
      id,
      fecha,
      total,
      saldo,
      interes,
      subtotal,
      codigoSeguimiento
    }
  }
`;

export const GET_NOTA_VENTA_BY_ID = gql`
  query getNotaVentaById($id: ID!) {
    getNotaVentaById(id: $id) {
      id,
      fecha,
      total,
      saldo,
      interes,
      subtotal,
      codigoSeguimiento
    }
  }
`;

export const GET_ALL_MARCAS = gql`
  query getAllMarcas {
    getAllMarcas {
      id,
      nombre,
      porcentaje
    }
  }
`;

export const GET_MARCA_BY_ID = gql`
  query getMarcaById($id: ID!) {
    getMarcaById(id: $id) {
      id,
      nombre,
      porcentaje
    }
  }
`;

export const GET_ALL_VEHICULOS = gql`
  query getAllVehiculos {
    getAllVehiculos {
      id,
      matricula,
      color,
      descripcion,
      modelo,
      marcaId
    }
  }
`;

export const GET_VEHICULO_BY_ID = gql`
  query getVehiculoById($id: ID!) {
    getVehiculoById(id: $id) {
      id,
      matricula,
      color,
      descripcion,
      modelo,
      marcaId
    }
  }
`;

export const GET_ALL_SALIDA = gql`
  query getAllSalida {
    getAllSalida {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const GET_SALIDA_BY_ID = gql`
  query getSalidaById($id: ID!) {
    getSalidaById(id: $id) {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const GET_ALL_DETALLE_SALIDA = gql`
  query getAllDetalleSalida {
    getAllDetalleSalida {
      id,
      cantidad
    }
  }
`;

export const GET_DETALLE_SALIDA_BY_ID = gql`
  query getDetalleSalidaById($id: ID!) {
    getDetalleSalidaById(id: $id) {
      id,
      cantidad
    }
  }
`;

export const GET_ALL_PROVEEDOR = gql`
  query getAllProveedor {
    getAllProveedor {
      id,
      nombre,
      direccion,
      celular,
      email,
      descripcion
    }
  }
`;

export const GET_PROVEEDOR_BY_ID = gql`
  query getProveedorById($id: ID!) {
    getProveedorById(id: $id) {
      id,
      nombre,
      direccion,
      celular,
      email,
      descripcion
    }
  }
`;

export const GET_ALL_PRODUCTO = gql`
  query getAllProducto {
    getAllProducto {
      id,
      nombre,
      descripcion,
      precio,
      stock
    }
  }
`;

export const GET_PRODUCTO_BY_ID = gql`
  query getProductoById($id: ID!) {
    getProductoById(id: $id) {
      id,
      nombre,
      descripcion,
      precio,
      stock
    }
  }
`;

export const GET_DETALLE_VENTA_SERVICIO_BY_ID = gql`
  query getDetalleVentaServicioById($id: ID!) {
    getDetalleVentaServicioById(id: $id) {
      id,
      monto,
      servicioId,
      notaVentaId
    }
  }
`;

export const GET_ALL_DETALLE_VENTA_SERVICIO_OF_NOTA_VENTA = gql`
  query getAllDetalleVentaServicioOfNotaVenta($notaVentaId: ID!) {
    getAllDetalleVentaServicioOfNotaVenta(notaVentaId: $notaVentaId) {
      id,
      monto,
      servicioId,
      notaVentaId
    }
  }
`;

export const GET_PLAN_DE_PAGO_BY_ID = gql`
  query getPlanDePagoById($id: ID!) {
    getPlanDePagoById(id: $id) {
      id,
      fechaInicio,
      cantidadCuotas,
      montoCuota,
      tiempoCuota,
      tipo,
      notaVentaId
    }
  }
`;

export const GET_ALL_PLANES_DE_PAGO = gql`
  query getAllPlanesDePago {
    getAllPlanesDePago {
      id,
      fechaInicio,
      cantidadCuotas,
      montoCuota,
      tiempoCuota,
      tipo,
      notaVentaId
    }
  }
`;

export const GET_DETALLE_DE_PAGO_BY_ID = gql`
  query getDetalleDePagoById($id: ID!) {
    getDetalleDePagoById(id: $id) {
      id,
      fechaPago,
      monto,
      estadoPago,
      planDePagoId
    }
  }
`;

export const GET_ALL_DETALLES_DE_PAGO_BY_PLAN_DE_PAGO_ID = gql`
  query getAllDetallesDePagoByPlanDePagoId($planDePagoId: ID!) {
    getAllDetallesDePagoByPlanDePagoId(planDePagoId: $planDePagoId) {
      id,
      fechaPago,
      monto,
      estadoPago,
      planDePagoId
    }
  }
`;

export const GET_ORDEN_DE_TRABAJO_BY_ID = gql`
  query getOrdenDeTrabajoById($id: ID!) {
    getOrdenDeTrabajoById(id: $id) {
      id,
      fechaInicio,
      fechaFin,
      estado,
      observacion,
      personalId,
      detalleVentaServicioId
    }
  }
`;

export const GET_ALL_ORDENES_DE_TRABAJO = gql`
  query getAllOrdenesDeTrabajo {
    getAllOrdenesDeTrabajo {
      id,
      fechaInicio,
      fechaFin,
      estado,
      observacion,
      personalId,
      detalleVentaServicioId
    }
  }
`;

export const GET_ALL_ORDENES_DE_TRABAJO_BY_DETALLE_VENTA_SERVICIO_ID = gql`
  query getAllOrdenesDeTrabajoByDetalleVentaServicioId($detalleVentaServicioId: ID!) {
    getAllOrdenesDeTrabajoByDetalleVentaServicioId(detalleVentaServicioId: $detalleVentaServicioId) {
      id,
      fechaInicio,
      fechaFin,
      estado,
      observacion,
      personalId,
      detalleVentaServicioId
    }
  }
`;

export const GET_ALL_ORDENES_DE_TRABAJO_BY_PERSONAL_ID = gql`
  query getAllOrdenesDeTrabajoByPersonalId($personalId: String!) {
    getAllOrdenesDeTrabajoByPersonalId(personalId: $personalId) {
      id,
      fechaInicio,
      fechaFin,
      estado,
      observacion,
      personalId,
      detalleVentaServicioId
    }
  }
`;


export const GET_ALL_NOTAS_COMPRA = gql`
  query getAllNotasCompra {
    getAllNotasCompra {
      id,
      fecha,
      montoTotal,
      personalId
    }
  }
`;

export const GET_NOTA_COMPRA_BY_ID = gql`
  query getNotaCompraById($id: ID!) {
    getNotaCompraById(id: $id) {
      id,
      fecha,
      montoTotal,
      personalId
    }
  }
`;

// Entrada Queries

export const GET_ALL_ENTRADAS = gql`
  query getAllEntradas {
    getAllEntradas {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const GET_ENTRADA_BY_ID = gql`
  query getEntradaById($id: ID!) {
    getEntradaById(id: $id) {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

// NotaDevolucion Queries

export const GET_ALL_NOTAS_DEVOLUCION = gql`
  query getAllNotasDevolucion {
    getAllNotasDevolucion {
      id,
      fecha,
      motivo,
      montoTotal,
      notaVentaId
    }
  }
`;

export const GET_NOTA_DEVOLUCION_BY_ID = gql`
  query getNotaDevolucionById($id: ID!) {
    getNotaDevolucionById(id: $id) {
      id,
      fecha,
      motivo,
      montoTotal,
      notaVentaId
    }
  }
`;

// DetalleCompra Queries

export const GET_DETALLE_COMPRA_BY_ID = gql`
  query getDetalleCompraById($id: ID!) {
    getDetalleCompraById(id: $id) {
      id,
      monto,
      cantidad,
      productoId,
      notaCompraId
    }
  }
`;

export const GET_ALL_DETALLE_COMPRA_OF_NOTA_COMPRA = gql`
  query getAllDetalleCompraOfNotaCompra($notaCompraId: ID!) {
    getAllDetalleCompraOfNotaCompra(notaCompraId: $notaCompraId) {
      id,
      monto,
      cantidad,
      productoId,
      notaCompraId
    }
  }
`;

// DetalleDevolucion Queries

export const GET_DETALLE_DEVOLUCION_BY_ID = gql`
  query getDetalleDevolucionById($id: ID!) {
    getDetalleDevolucionById(id: $id) {
      id,
      cantidad,
      monto,
      productoId,
      notaDevolucionId
    }
  }
`;

export const GET_ALL_DETALLE_DEVOLUCION_OF_NOTA_DEVOLUCION = gql`
  query getAllDetalleDevolucionOfNotaDevolucion($notaDevolucionId: ID!) {
    getAllDetalleDevolucionOfNotaDevolucion(notaDevolucionId: $notaDevolucionId) {
      id,
      cantidad,
      monto,
      productoId,
      notaDevolucionId
    }
  }
`;

// DetalleEntrada Queries

export const GET_DETALLE_ENTRADA_BY_ID = gql`
  query getDetalleEntradaById($id: ID!) {
    getDetalleEntradaById(id: $id) {
      id,
      cantidad,
      productoId,
      notaEntradaId
    }
  }
`;

export const GET_ALL_DETALLE_ENTRADA_OF_NOTA_ENTRADA = gql`
  query getAllDetalleEntradaOfNotaEntrada($notaEntradaId: ID!) {
    getAllDetalleEntradaOfNotaEntrada(notaEntradaId: $notaEntradaId) {
      id,
      cantidad,
      productoId,
      notaEntradaId
    }
  }
`;

// DetalleVentaProducto Queries

export const GET_DETALLE_VENTA_PRODUCTO_BY_ID = gql`
  query getDetalleVentaProductoById($id: ID!) {
    getDetalleVentaProductoById(id: $id) {
      id,
      precioUnitario,
      cantidad,
      montoTotal,
      notaVentaId,
      productoId
    }
  }
`;

export const GET_ALL_DETALLE_VENTA_PRODUCTO_OF_NOTA_VENTA = gql`
  query getAllDetalleVentaProductoOfNotaVenta($notaVentaId: ID!) {
    getAllDetalleVentaProductoOfNotaVenta(notaVentaId: $notaVentaId) {
      id,
      precioUnitario,
      cantidad,
      montoTotal,
      notaVentaId,
      productoId
    }
  }
`;
