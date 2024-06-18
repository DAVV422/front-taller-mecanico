import { gql } from "apollo-angular";

export const CREATE_USUARIO = gql`
  mutation createUsuario($nombreUsuario: String!, $email: String!, $password: String!, $tipo: String!) {
    createUsuario(nombreUsuario: $nombreUsuario, email: $email, password: $password, tipo: $tipo) {
      id,
      nombreUsuario,
      email,
      password,
      tipo
    }
  }
`;

export const UPDATE_USUARIO = gql`
  mutation updateUsuario($id: ID!, $nombreUsuario: String, $email: String, $password: String, $tipo: String) {
    updateUsuario(id: $id, nombreUsuario: $nombreUsuario, email: $email, password: $password, tipo: $tipo) {
      id,
      nombreUsuario,
      email,
      password,
      tipo
    }
  }
`;

export const DELETE_USUARIO = gql`
  mutation deleteUsuario($id: ID!) {
    deleteUsuario(id: $id)
  }
`;

export const CREATE_PERSONAL = gql`
  mutation createPersonal($nombre: String!, $apellido: String!, $ci: String!, $direccion: String!, $celular: String!, $fechaNacimiento: String!, $usuarioId: String) {
    createPersonal(nombre: $nombre, apellido: $apellido, ci: $ci, direccion: $direccion, celular: $celular, fechaNacimiento: $fechaNacimiento, usuarioId: $usuarioId) {
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

export const UPDATE_PERSONAL = gql`
  mutation updatePersonal($id: ID!, $nombre: String, $apellido: String, $ci: String, $direccion: String, $celular: String, $fechaNacimiento: String) {
    updatePersonal(id: $id, nombre: $nombre, apellido: $apellido, ci: $ci, direccion: $direccion, celular: $celular, fechaNacimiento: $fechaNacimiento) {
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

export const DELETE_PERSONAL = gql`
  mutation deletePersonal($id: ID!) {
    deletePersonal(id: $id)
  }
`;

export const CREATE_CLIENTE = gql`
  mutation createCliente($nombre: String!, $apellido: String!, $celular: String!, $nit: String!, $usuarioId: String) {
    createCliente(nombre: $nombre, apellido: $apellido, celular: $celular, nit: $nit, usuarioId: $usuarioId) {
      id,
      nombre,
      apellido,
      celular,
      nit,
      usuarioId
    }
  }
`;

export const UPDATE_CLIENTE = gql`
  mutation updateCliente($id: ID!, $nombre: String, $apellido: String, $celular: String, $nit: String, $usuarioId: String) {
    updateCliente(id: $id, nombre: $nombre, apellido: $apellido, celular: $celular, nit: $nit, usuarioId: $usuarioId) {
      id,
      nombre,
      apellido,
      celular,
      nit,
      usuarioId
    }
  }
`;

export const DELETE_CLIENTE = gql`
  mutation deleteCliente($id: ID!) {
    deleteCliente(id: $id)
  }
`;

export const CREATE_CITA = gql`
  mutation createCita($fecha: String!, $hora: String!, $estado: String!, $usuarioId: String!, $personalId: String!) {
    createCita(fecha: $fecha, hora: $hora, estado: $estado, usuarioId: $usuarioId, personalId: $personalId) {
      id,
      fecha,
      hora,
      estado,
      usuarioId,
      personalId
    }
  }
`;

export const UPDATE_CITA = gql`
  mutation updateCita($id: ID!, $fecha: String, $hora: String, $estado: String, $usuarioId: String, $personalId: String) {
    updateCita(id: $id, fecha: $fecha, hora: $hora, estado: $estado, usuarioId: $usuarioId, personalId: $personalId) {
      id,
      fecha,
      hora,
      estado,
      usuarioId,
      personalId
    }
  }
`;

export const DELETE_CITA = gql`
  mutation deleteCita($id: ID!) {
    deleteCita(id: $id)
  }
`;

export const CREATE_SERVICIO = gql`
  mutation createServicio($nombre: String!, $descripcion: String!, $tipo: String!, $tarifaBase: Float!) {
    createServicio(nombre: $nombre, descripcion: $descripcion, tipo: $tipo, tarifaBase: $tarifaBase) {
      id,
      nombre,
      descripcion,
      tipo,
      tarifaBase
    }
  }
`;

export const UPDATE_SERVICIO = gql`
  mutation updateServicio($id: ID!, $nombre: String, $descripcion: String, $tipo: String!, $tarifaBase: Float) {
    updateServicio(id: $id, nombre: $nombre, descripcion: $descripcion, tipo: $tipo, tarifaBase: $tarifaBase) {
      id,
      nombre,
      descripcion,
      tipo,
      tarifaBase
    }
  }
`;

export const DELETE_SERVICIO = gql`
  mutation deleteServicio($id: ID!) {
    deleteServicio(id: $id)
  }
`;

export const CREATE_NOTA_VENTA = gql`
  mutation createNotaVenta($fecha: String!, $interes: Float!) {
    createNotaVenta(fecha: $fecha, interes: $interes) {
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

export const UPDATE_NOTA_VENTA = gql`
  mutation updateNotaVenta($id: ID!, $fecha: String, $interes: Float) {
    updateNotaVenta(id: $id, fecha: $fecha, interes: $interes) {
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

export const DELETE_NOTA_VENTA = gql`
  mutation deleteNotaVenta($id: ID!) {
    deleteNotaVenta(id: $id)
  }
`;

export const CREATE_MARCA = gql`
  mutation createMarca($nombre: String!, $porcentaje: Float!) {
    createMarca(nombre: $nombre, porcentaje: $porcentaje) {
      id,
      nombre,
      porcentaje
    }
  }
`;

export const UPDATE_MARCA = gql`
  mutation updateMarca($id: ID!, $nombre: String, $porcentaje: Float) {
    updateMarca(id: $id, nombre: $nombre, porcentaje: $porcentaje) {
      id,
      nombre,
      porcentaje
    }
  }
`;

export const DELETE_MARCA = gql`
  mutation deleteMarca($id: ID!) {
    deleteMarca(id: $id)
  }
`;

export const CREATE_VEHICULO = gql`
  mutation createVehiculo($matricula: String!, $color: String!, $descripcion: String!, $modelo: String!, $marcaId: String!) {
    createVehiculo(matricula: $matricula, color: $color, descripcion: $descripcion, modelo: $modelo, marcaId: $marcaId) {
      id,
      matricula,
      color,
      descripcion,
      modelo,
      marcaId
    }
  }
`;

export const UPDATE_VEHICULO = gql`
  mutation updateVehiculo($id: ID!, $matricula: String, $color: String, $descripcion: String, $modelo: String, $marcaId: String) {
    updateVehiculo(id: $id, matricula: $matricula, color: $color, descripcion: $descripcion, modelo: $modelo, marcaId: $marcaId) {
      id,
      matricula,
      color,
      descripcion,
      modelo,
      marcaId
    }
  }
`;

export const DELETE_VEHICULO = gql`
  mutation deleteVehiculo($id: ID!) {
    deleteVehiculo(id: $id)
  }
`;

export const CREATE_SALIDA = gql`
  mutation createSalida($fecha: String!, $motivo: String!, $hora: String!) {
    createSalida(fecha: $fecha, motivo: $motivo, hora: $hora) {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const UPDATE_SALIDA = gql`
  mutation updateSalida($id: ID!, $fecha: String!, $motivo: String!, $hora: String!) {
    updateSalida(id: $id, fecha: $fecha, motivo: $motivo, hora: $hora) {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const DELETE_SALIDA = gql`
  mutation deleteSalida($id: ID!) {
    deleteSalida(id: $id)
  }
`;

export const CREATE_DETALLE_SALIDA = gql`
  mutation createDetalleSalida($cantidad: String!) {
    createDetalleSalida(cantidad: $cantidad) {
      id,
      cantidad
    }
  }
`;

export const UPDATE_DETALLE_SALIDA = gql`
  mutation updateDetalleSalida($id: ID!, $cantidad: String) {
    updateDetalleSalida(id: $id, cantidad: $cantidad) {
      id,
      cantidad
    }
  }
`;

export const DELETE_DETALLE_SALIDA = gql`
  mutation deleteDetalleSalida($id: ID!) {
    deleteDetalleSalida(id: $id)
  }
`;

export const CREATE_PROVEEDOR = gql`
  mutation createProveedor($nombre: String!, $descripcion: String!, $direccion: String!, $celular: String!, $email: String!) {
    createProveedor(nombre: $nombre, descripcion: $descripcion, direccion: $direccion, celular: $celular, email: $email) {
      id,
      nombre,
      descripcion,
      direccion,
      celular,
      email
    }
  }
`;

export const UPDATE_PROVEEDOR = gql`
  mutation updateProveedor($id: ID!, $nombre: String, $descripcion: String, $direccion: String, $celular: String, $email: String) {
    updateProveedor(id: $id, nombre: $nombre, descripcion: $descripcion, direccion: $direccion, celular: $celular, email: $email) {
      id,
      nombre,
      descripcion,
      direccion,
      celular,
      email
    }
  }
`;

export const DELETE_PROVEEDOR = gql`
  mutation deleteProveedor($id: ID!) {
    deleteProveedor(id: $id)
  }
`;

export const CREATE_PRODUCTO = gql`
  mutation createProducto($nombre: String!, $descripcion: String!, $precio: Float!, $stock: String!) {
    createProducto(nombre: $nombre, descripcion: $descripcion, precio: $precio, stock: $stock) {
      id,
      nombre,
      descripcion,
      precio,
      stock
    }
  }
`;

export const UPDATE_PRODUCTO = gql`
  mutation updateProducto($id: String!, $nombre: String!, $descripcion: String!, $precio: Float!, $stock: String!) {
    updateProducto(id: $id, nombre: $nombre, descripcion: $descripcion, precio: $precio, stock: $stock) {
      id,
      nombre,
      descripcion,
      precio,
      stock
    }
  }
`;

export const DELETE_PRODUCTO = gql`
  mutation deleteProducto($id: String!) {
    deleteProducto(id: $id)
  }
`;

export const CREATE_DETALLE_VENTA_SERVICIO = gql`
  mutation createDetalleVentaServicio($vehiculoId: String!, $servicioId: String!, $notaVentaId: String!) {
    createDetalleVentaServicio(vehiculoId: $vehiculoId, servicioId: $servicioId, notaVentaId: $notaVentaId) {
      id,
      monto,
      vehiculoId,
      servicioId,
      notaVentaId
    }
  }
`;

export const DELETE_DETALLE_VENTA_SERVICIO = gql`
  mutation deleteDetalleVentaServicio($id: ID!) {
    deleteDetalleVentaServicio(id: $id)
  }
`;

export const CREATE_PLAN_DE_PAGO = gql`
  mutation createPlanDePago($fechaInicio: String!, $cantidadCuotas: Int!, $montoCuota: Float!, $tiempoCuota: String!, $tipo: String!, $notaVentaId: String!) {
    createPlanDePago(fechaInicio: $fechaInicio, cantidadCuotas: $cantidadCuotas, montoCuota: $montoCuota, tiempoCuota: $tiempoCuota, tipo: $tipo, notaVentaId: $notaVentaId) {
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

export const UPDATE_PLAN_DE_PAGO = gql`
  mutation updatePlanDePago($id: ID!, $fechaInicio: String, $cantidadCuotas: Int, $montoCuota: Float, $tiempoCuota: String, $tipo: String) {
    updatePlanDePago(id: $id, fechaInicio: $fechaInicio, cantidadCuotas: $cantidadCuotas, montoCuota: $montoCuota, tiempoCuota: $tiempoCuota, tipo: $tipo) {
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

export const DELETE_PLAN_DE_PAGO = gql`
  mutation deletePlanDePago($id: ID!) {
    deletePlanDePago(id: $id)
  }
`;

export const CREATE_DETALLE_DE_PAGO = gql`
  mutation createDetalleDePago($fechaPago: String!, $monto: Float!, $estadoPago: String!, $planDePagoId: String!) {
    createDetalleDePago(fechaPago: $fechaPago, monto: $monto, estadoPago: $estadoPago, planDePagoId: $planDePagoId) {
      id,
      fechaPago,
      monto,
      estadoPago,
      planDePagoId
    }
  }
`;

export const UPDATE_DETALLE_DE_PAGO = gql`
  mutation updateDetalleDePago($id: ID!, $fechaPago: String, $estadoPago: String) {
    updateDetalleDePago(id: $id, fechaPago: $fechaPago, estadoPago: $estadoPago) {
      id,
      fechaPago,
      monto,
      estadoPago,
      planDePagoId
    }
  }
`;

export const DELETE_DETALLE_DE_PAGO = gql`
  mutation deleteDetalleDePago($id: ID!) {
    deleteDetalleDePago(id: $id)
  }
`;

// OrdenDeTrabajo Mutations

export const CREATE_ORDEN_DE_TRABAJO = gql`
  mutation createOrdenDeTrabajo($fechaInicio: String!, $fechaFin: String!, $estado: String!, $observacion: String!, $personalId: String!, $detalleVentaServicioId: String!) {
    createOrdenDeTrabajo(fechaInicio: $fechaInicio, fechaFin: $fechaFin, estado: $estado, observacion: $observacion, personalId: $personalId, detalleVentaServicioId: $detalleVentaServicioId) {
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

export const UPDATE_ORDEN_DE_TRABAJO = gql`
  mutation updateOrdenDeTrabajo($id: ID!, $fechaInicio: String, $fechaFin: String, $estado: String, $observacion: String, $personalId: String, $detalleVentaServicioId: String) {
    updateOrdenDeTrabajo(id: $id, fechaInicio: $fechaInicio, fechaFin: $fechaFin, estado: $estado, observacion: $observacion, personalId: $personalId, detalleVentaServicioId: $detalleVentaServicioId) {
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

export const DELETE_ORDEN_DE_TRABAJO = gql`
  mutation deleteOrdenDeTrabajo($id: ID!) {
    deleteOrdenDeTrabajo(id: $id)
  }
`;

export const CREATE_NOTA_COMPRA = gql`
  mutation createNotaCompra($fecha: String!, $montoTotal: Float!, $personalId: String!) {
    createNotaCompra(fecha: $fecha, montoTotal: $montoTotal, personalId: $personalId) {
      id,
      fecha,
      montoTotal,
      personalId
    }
  }
`;

export const UPDATE_NOTA_COMPRA = gql`
  mutation updateNotaCompra($id: ID!, $fecha: String, $montoTotal: Float, $personalId: String) {
    updateNotaCompra(id: $id, fecha: $fecha, montoTotal: $montoTotal, personalId: $personalId) {
      id,
      fecha,
      montoTotal,
      personalId
    }
  }
`;

export const DELETE_NOTA_COMPRA = gql`
  mutation deleteNotaCompra($id: ID!) {
    deleteNotaCompra(id: $id)
  }
`;

// Entrada Mutations

export const CREATE_ENTRADA = gql`
  mutation createEntrada($fecha: String!, $motivo: String!, $hora: String!) {
    createEntrada(fecha: $fecha, motivo: $motivo, hora: $hora) {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const UPDATE_ENTRADA = gql`
  mutation updateEntrada($id: ID!, $fecha: String, $motivo: String, $hora: String) {
    updateEntrada(id: $id, fecha: $fecha, motivo: $motivo, hora: $hora) {
      id,
      fecha,
      motivo,
      hora
    }
  }
`;

export const DELETE_ENTRADA = gql`
  mutation deleteEntrada($id: ID!) {
    deleteEntrada(id: $id)
  }
`;

// NotaDevolucion Mutations

export const CREATE_NOTA_DEVOLUCION = gql`
  mutation createNotaDevolucion($fecha: String!, $motivo: String!, $montoTotal: Float!, $notaVentaId: String!) {
    createNotaDevolucion(fecha: $fecha, motivo: $motivo, montoTotal: $montoTotal, notaVentaId: $notaVentaId) {
      id,
      fecha,
      motivo,
      montoTotal,
      notaVentaId
    }
  }
`;

export const UPDATE_NOTA_DEVOLUCION = gql`
  mutation updateNotaDevolucion($id: ID!, $fecha: String, $motivo: String, $montoTotal: Float, $notaVentaId: String) {
    updateNotaDevolucion(id: $id, fecha: $fecha, motivo: $motivo, montoTotal: $montoTotal, notaVentaId: $notaVentaId) {
      id,
      fecha,
      motivo,
      montoTotal,
      notaVentaId
    }
  }
`;

export const DELETE_NOTA_DEVOLUCION = gql`
  mutation deleteNotaDevolucion($id: ID!) {
    deleteNotaDevolucion(id: $id)
  }
`;

// DetalleCompra Mutations

export const CREATE_DETALLE_COMPRA = gql`
  mutation createDetalleCompra($monto: Float!, $cantidad: Int!, $productoId: ID!, $notaCompraId: ID!) {
    createDetalleCompra(monto: $monto, cantidad: $cantidad, productoId: $productoId, notaCompraId: $notaCompraId) {
      id,
      monto,
      cantidad,
      productoId,
      notaCompraId
    }
  }
`;

export const DELETE_DETALLE_COMPRA = gql`
  mutation deleteDetalleCompra($id: ID!) {
    deleteDetalleCompra(id: $id)
  }
`;

// DetalleDevolucion Mutations

export const CREATE_DETALLE_DEVOLUCION = gql`
  mutation createDetalleDevolucion($cantidad: Int!, $monto: Float!, $productoId: ID!, $notaDevolucionId: ID!) {
    createDetalleDevolucion(cantidad: $cantidad, monto: $monto, productoId: $productoId, notaDevolucionId: $notaDevolucionId) {
      id,
      cantidad,
      monto,
      productoId,
      notaDevolucionId
    }
  }
`;

export const DELETE_DETALLE_DEVOLUCION = gql`
  mutation deleteDetalleDevolucion($id: ID!) {
    deleteDetalleDevolucion(id: $id)
  }
`;

// DetalleEntrada Mutations

export const CREATE_DETALLE_ENTRADA = gql`
  mutation createDetalleEntrada($cantidad: Int!, $productoId: ID!, $notaEntradaId: ID!) {
    createDetalleEntrada(cantidad: $cantidad, productoId: $productoId, notaEntradaId: $notaEntradaId) {
      id,
      cantidad,
      productoId,
      notaEntradaId
    }
  }
`;

export const DELETE_DETALLE_ENTRADA = gql`
  mutation deleteDetalleEntrada($id: ID!) {
    deleteDetalleEntrada(id: $id)
  }
`;

// DetalleVentaProducto Mutations

export const CREATE_DETALLE_VENTA_PRODUCTO = gql`
  mutation createDetalleVentaProducto($precioUnitario: Float!, $cantidad: Int!, $montoTotal: Float!, $notaVentaId: ID!, $productoId: ID!) {
    createDetalleVentaProducto(precioUnitario: $precioUnitario, cantidad: $cantidad, montoTotal: $montoTotal, notaVentaId: $notaVentaId, productoId: $productoId) {
      id,
      precioUnitario,
      cantidad,
      montoTotal,
      notaVentaId,
      productoId
    }
  }
`;

export const DELETE_DETALLE_VENTA_PRODUCTO = gql`
  mutation deleteDetalleVentaProducto($id: ID!) {
    deleteDetalleVentaProducto(id: $id)
  }
`;