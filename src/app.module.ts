import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Pet } from './entities/pet.entity';
import { Sale } from './entities/sale.entity';
import { ClientModule } from './modules/client/client.module';
import { PetModule } from './modules/pet/pet.module';
import { SaleModule } from './modules/sale/sale.module';
import { ServiceModule } from './modules/service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ClientModule,
    PetModule,
    SaleModule,
    ServiceModule,
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([Client, Pet, Sale]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
