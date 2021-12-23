import { Injectable ,Inject, ConflictException } from "@nestjs/common";
import { usuarioType } from "./usuario.controller";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioRepositories } from "./usuario.repositories";



@Injectable()
export class UsuarioService {

    constructor(
        private usuarioRepositories :  UsuarioRepositories 
    ){}

    async adicionarUsuario(usuario : usuarioType) : Promise<any>  {
        try{

            return await this.usuarioRepositories.adicionarUsuario(usuario)
        }catch(e){
            console.log("To no Catch")
            throw new ConflictException()
        }
    }

    async excluirUsuario(id : number) : Promise<any>  {
        try{
            return await this.usuarioRepositories.excluirUsuario(id)
        }catch(e){
            console.log("To no Catch")
            throw new ConflictException()
        }
    }

    async alterarUsuario(id : number , usuario : usuarioType) : Promise<any>  {
        try{ 
            return await this.usuarioRepositories.alterarUsuario(id , usuario)
        }catch(e){
            console.log("To no Catch")
            throw new ConflictException()
        }
    }

    async pegarUmUsuario(id : number) : Promise<any>  {
        try{
            return await this.usuarioRepositories.pegarUmUsuario(id)
        }catch(e){
            console.log("To no Catch")
            throw new ConflictException()
        }
            
    }

    async pegarTodosUsuarios() : Promise<any>  {
        try{
            return await this.usuarioRepositories.pegarTodosUsuarios()
        }catch(e){
            // console.log("To no Catch")
            throw new ConflictException()
        }
        }
}