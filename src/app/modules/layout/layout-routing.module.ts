import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PublicGuard } from '../auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,    
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'users',
    component: LayoutComponent,    
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'citas',
    component: LayoutComponent,    
    loadChildren: () => import('../citas/cita.module').then((m) => m.CitaModule),
  },
  {
    path: 'inventario',
    component: LayoutComponent,    
    loadChildren: () => import('../inventario/inventario.module').then((m) => m.InventarioModule),
  },
  {
    path: 'orden-trabajo',
    component: LayoutComponent,    
    loadChildren: () => import('../orden-trabajo/orden-trabajo.module').then((m) => m.OrdenTrabajoModule),
  },
  {
    path: 'compras',
    component: LayoutComponent,    
    loadChildren: () => import('../compras/compras.module').then((m) => m.ComprasModule),
  },
  {
    path: 'ventas',
    component: LayoutComponent,    
    loadChildren: () => import('../ventas/ventas.module').then((m) => m.VentasModule),
  },
  {
    path: 'productos',
    component: LayoutComponent,    
    loadChildren: () => import('../productos/productos.module').then((m) => m.ProductosModule),
  },
  {
    path: 'servicios',
    component: LayoutComponent,    
    loadChildren: () => import('../servicios/servicios.module').then((m) => m.ServiciosModule),
  },
  {
    path: 'vehiculos',
    component: LayoutComponent,    
    loadChildren: () => import('../vehiculos/vehiculos.module').then((m) => m.VehiculosModule),
  },

  {
    path: 'proveedor',
    component: LayoutComponent,    
    loadChildren: () => import('../proveedor/proveedor.module').then((m) => m.ProveedorModule),
  },
  {
    path: 'salida',
    component: LayoutComponent,    
    loadChildren: () => import('../salida/salida.module').then((m) => m.SalidaModule),
  },
  {
    path: 'entrada',
    component: LayoutComponent,    
    loadChildren: () => import('../entrada/entrada.module').then((m) => m.EntradaModule),
  },
  {
    path: 'detallesalida',
    component: LayoutComponent,    
    loadChildren: () => import('../detalle-salida/detalle-salida.module').then((m) => m.DetalleSalidaModule),
   //  loadChildren()=>import('../detalle-salida/detalle-salida.module').then((m)=>m.DetalleSalidaModule),
  },
  {
    path: 'pagos',
    component: LayoutComponent,    
    loadChildren: () => import('../pagos/pagos.module').then((m) => m.PagosModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
