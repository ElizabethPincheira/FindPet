
// src/seed/seed.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';


@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
  ) {}

  async seedUsuarios() {
    const count = await this.usuarioRepo.count();
    if (count > 0) return;

    const usuarios = [
      {
        nombre: 'Elizabeth',
        apellido: 'Pincheira',
        correo_electronico: 'admin@fundacion.cl',
        contrasena: await bcrypt.hash('admin123', 10),
        tipo_usuario: 'administrador',
      },
      {
        nombre: 'Juan',
        apellido: 'Perez',
        correo_electronico: 'juan@mail.cl',
        contrasena: await bcrypt.hash('juan123', 10),
        tipo_usuario: 'comun',
      },
    ];

    await this.usuarioRepo.save(usuarios);
  }
}




