import { Component, OnInit } from '@angular/core';
import { Nft } from '../../../dashboard/models/nft';
import { NgFor } from '@angular/common';
import { EmergencyTableItemComponent } from '../emergency-table-item/emergency-table-item.component';
import { Router } from '@angular/router';
import { Emergency } from '../../interfaces/emergency.interface';

@Component({
    selector: '[emergencies-table]',
    templateUrl: './emergencies-table.component.html',
    standalone: true,
    imports: [NgFor, EmergencyTableItemComponent],
})
export class EmergenciesTableComponent implements OnInit {
  public activeAuction: Emergency[] = [];

  constructor(private router: Router) {    
    this.activeAuction = [
      {
        id: 1,
        name: "Incendio en la fábrica de muebles",
        location: "Parque Industrial",
        date: "2024-03-10",
        hour: "15:45",
        type: "Incendio",
        map: "https://maps.example.com/incendio-fabrica-maderas-del-sur",
        duration: "4 horas",
        safety_message: "Evite la zona de los almacenes y siga las indicaciones de los equipos de emergencia."
      },
      {
        id: 2,
        name: "Accidente de tránsito",
        location: "3 pasos al frente, 8vo Anillo",
        date: "2024-04-05",
        hour: "08:30",
        type: "Accidente de tránsito",
        map: "https://maps.example.com/accidente-autopista-23",
        duration: "1 hora",
        safety_message: "Tener cuidado con los vehículos que circulan en la avenida."
      },
      {
        id: 3,
        name: "Búsqueda de persona que cayó al canal",
        location: "Laguna Guapilo",
        date: "2024-05-21",
        hour: "17:20",
        type: "Inundación",
        map: "https://maps.example.com/inundacion-barrio-rio-azul",
        duration: "6 horas",
        safety_message: "Llevar chaleco salvavidas si se va a ingresar al agua."
      },
      {
        id: 4,
        name: "Incendio Plan 3000",
        location: "Plan 3000",
        date: "2024-06-02",
        hour: "11:15",
        type: "Incendio de Interface",
        map: "https://maps.example.com/deslizamiento-zona-montanosa",
        duration: "3 horas",
        safety_message: "Cuidado con los focos de calor y atento a los vientos."
      },
      {
        id: 5,
        name: "Fuga de gas en el mercado de la Villa",
        location: "Villa 1ro de Mayo",
        date: "2024-07-17",
        hour: "09:00",
        type: "Fuga de gas",
        map: "https://maps.example.com/fuga-gas-torres-del-este",
        duration: "1 hora",
        safety_message: "Utilizar el epp adecuado."
      },
      {
        id: 6,
        name: "Incendio forestal Viru Viru",
        location: "Aeropuerto Viru Viru",
        date: "2024-08-30",
        hour: "20:10",
        type: "Incendio Forestal",
        map: "https://maps.example.com/aterrizaje-emergencia-ciudad-del-aire",
        duration: "12 horas",
        safety_message: "Atento a los focos de calor y velocidad del incendio, resguardarse del humo."
      },
      // {
      //   id: 7,
      //   name: "Explosión en la planta química 'Productos Químicos del Norte'",
      //   location: "Planta Química del Norte, Av. Industrial #789",
      //   date: "2024-09-12",
      //   hour: "14:50",
      //   type: "Explosión",
      //   map: "https://maps.example.com/explosion-planta-quimica-norte",
      //   duration: "5 horas",
      //   safety_message: "Evacue el área y manténgase alejado de posibles nubes tóxicas."
      // },
      // {
      //   id: 8,
      //   name: "Rescate en montaña de excursionistas extraviados",
      //   location: "Montañas del Norte, Sendero del Pico",
      //   date: "2024-10-08",
      //   hour: "10:30",
      //   type: "Rescate",
      //   map: "https://maps.example.com/rescate-excursionistas-montanas",
      //   duration: "8 horas",
      //   safety_message: "Permanezca en el lugar y siga las indicaciones de los equipos de rescate."
      // },
      // {
      //   id: 9,        
      //   name: "Derrame de productos químicos en el río 'Verde'",
      //   location: "Río Verde, Puente Nuevo",
      //   date: "2024-11-19",
      //   hour: "16:40",
      //   type: "Contaminación ambiental",
      //   map: "https://maps.example.com/derrame-quimicos-rio-verde",
      //   duration: "24 horas",
      //   safety_message: "Evite el contacto con el agua del río y siga las recomendaciones de las autoridades ambientales."
      // },
      // {
      //   id: 10,
      //   name: "Evacuación por amenaza de bomba en el centro comercial 'Plaza Central'",
      //   location: "Centro Comercial Plaza Central, Av. Comercial #101",
      //   date: "2024-12-05",
      //   hour: "13:15",
      //   type: "Amenaza de bomba",
      //   map: "https://maps.example.com/evacuacion-amenaza-bomba-plaza-central",
      //   duration: "2 horas",
      //   safety_message: "Abandone el edificio de manera ordenada y siga las instrucciones de seguridad."
      // }
    ]
    
  }

  ngOnInit(): void {}

  newUser(): void {
    this.router.navigate(['/sci/emergencies/new']);
  }
}
