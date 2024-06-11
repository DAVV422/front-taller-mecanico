import { Rol } from "./login.interface";

export interface Usuario {
  id: string;
  createdAt: string;
  updatedAt: string;
  nombre: string;
  apellido: string;
  email: string;
  role: Rol;
}
