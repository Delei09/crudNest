import { Injectable } from "@nestjs/common";
import { usuarioType } from "./usuario.controller";
import { UsuarioEntity } from "./usuario.entity";


@Injectable()
export class UsuarioRepositories {

    async adicionarUsuario(usuario : usuarioType) : Promise<any>  {
        return await UsuarioEntity.create(usuario)
    }

    async excluirUsuario(id : number) : Promise<any>  {
        return await UsuarioEntity.destroy({
            where : {
                id : id
            }
        })
    }

    async alterarUsuario(id : number , usuario : usuarioType) : Promise<any>  {
        return await UsuarioEntity.update(usuario, {
            where : {
                id : id
            }
        })
    }

    async pegarUmUsuario(id : number) : Promise<any>  {
        return await UsuarioEntity.findByPk(id, {
            attributes : ['nome' , 'email' , 'id']
        })
    }

    async pegarTodosUsuarios() : Promise<any>  {
        return await UsuarioEntity.findAll()
    }

}