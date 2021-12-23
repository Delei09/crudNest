import { Sequelize } from 'sequelize-typescript';
import { UsuarioEntity } from './usuario.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'nest',
      });
      sequelize.addModels( [ UsuarioEntity ] );
      await sequelize.sync({
          force : true
      });
      return sequelize;
    },
  },
];