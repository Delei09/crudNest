
import { Body, ConflictException, Controller, Delete, Get , Param, Post, Put, Req} from '@nestjs/common'
import { UsuarioService } from './usuario.service'

export type usuarioType = {
    nome : string ,
    email : string ,
    senha : string
}

@Controller('usuario')
export class UsuarioController {

    constructor(
        private usuarioService : UsuarioService
    ){}

    @Get()
    async pegarTodos() {
       
            return await this.usuarioService.pegarTodosUsuarios()
      
    }

    @Get(':id')
    pegarUm(@Param() params)  {
    
        return this.usuarioService.pegarUmUsuario(params.id)
        
    }

    @Post()
     adicionarUsuario(@Body() body : usuarioType) : Promise<any>{
            return  this.usuarioService.adicionarUsuario(body)
    }

    @Delete(':id')
    excluirUsuario(@Param() params) {

        return this.usuarioService.excluirUsuario(params.id)
    }

    @Put(':id')
    alterarUsuario( @Param() {id} , @Body() body ) {

        return this.usuarioService.alterarUsuario(id , body)
    }


}


