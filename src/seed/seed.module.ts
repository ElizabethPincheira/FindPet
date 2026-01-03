import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]), // 👈 CLAVE
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
