import { Module } from '@nestjs/common';
import { ClientController } from './controllers/client.controller';
import { ClientService } from './services/client.service';
import { Client } from '@/entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from '@/entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Pet])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
