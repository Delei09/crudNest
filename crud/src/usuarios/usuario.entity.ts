
import {DataType , Table , Column , Model} from 'sequelize-typescript'


@Table({
    tableName : 'Usuarios'
})
export class UsuarioEntity extends Model {

    @Column({
        allowNull : false ,
        unique : true
    })
    nome: string

    @Column 
    email : string

    @Column
    senha: string
}

