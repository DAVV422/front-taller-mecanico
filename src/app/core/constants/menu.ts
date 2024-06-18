import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Taller',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/taller/dashboard',          
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Users',
          route: '/taller/users',          
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Personal',
          route: '/taller/users/personal',          
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Clientes',
          route: '/taller/users/clientes',          
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Citas',
          route: '/taller/citas',          
        },
      ],
    },
    {
      group: 'Servicios',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Servicios',
          route: '/taller/servicios',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Productos',
          route: '/taller/productos',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Ventas',
          route: '/taller/ventas',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Compras',
          route: '/taller/compras',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Ordenes de Trabajo',
          route: '/taller/orden-trabajo',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Vehiculos',
          children: [
            { label: 'Vehiculos', route: '/taller/vehiculos/' },
            { label: 'Marcas', route: '/taller/vehiculos/marcas' },            
          ],  
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'proveedor',
          route: '/taller/proveedor',
        },
        /*<{
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Salida Productos',
          route: '/taller/salida',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Entrada productos',
          route: '/taller/entrada',
        }, */
       /* {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'detallesalida',
          route: '/taller/detallesalida',
        },*/
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Inventario',
          children: [
            { label: 'Entradas Producto', route: '/taller/entrada' },
            { label: 'Salidas Producto', route: '/taller/salida' },            
          ],      
        },                
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/folder.svg',
        //   label: 'Folders',
        //   route: '/folders',
        //   children: [
        //     { label: 'Current Files', route: '/folders/current-files' },
        //     { label: 'Downloads', route: '/folders/download' },
        //     { label: 'Trash', route: '/folders/trash' },
        //   ],
        // },
      ],
    },
  ];
}
