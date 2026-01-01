import { Controller, Get, Param } from '@nestjs/common';

@Controller('usuarios') //enpoint -> /usuarios
export class UsuariosController {

    private usuarios = ['Juan Pablo','Elizabeth'];

    @Get()
    getAllUsers() {
        return this.usuarios;
    }
    @Get(':id')
    getUserById(@Param('id') id: string) {
        console.log({id})
        return this.usuarios[parseInt(id)];
    }


}


