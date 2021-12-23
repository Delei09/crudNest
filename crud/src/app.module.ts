import { UsuarioController } from './usuarios/usuario.controller';

import { Module }  from '@nestjs/common';
import { databaseProviders } from './usuarios/usuarioDatabase.provider';
import { UsuarioService } from './usuarios/usuario.service';
import { UsuarioRepositories } from './usuarios/usuario.repositories';


@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [...databaseProviders, UsuarioService , UsuarioRepositories],
  exports : [...databaseProviders, UsuarioService , UsuarioRepositories]
})
export class AppModule {}
