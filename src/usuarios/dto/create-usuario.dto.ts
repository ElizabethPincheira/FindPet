export class CreateUsuarioDto {
  nombre: string;
  apellido: string;
  correo_electronico: string;
  contrasena: string;
  tipo_usuario?: string;
}
