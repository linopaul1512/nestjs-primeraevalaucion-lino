import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ClientesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'clientes',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo en desarrollo
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



