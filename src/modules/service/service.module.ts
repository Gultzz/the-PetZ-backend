import { Module } from '@nestjs/common';
import { ServiceController } from './controllers/service.controller';
import { ServiceService } from './services/service.service';
import { Pet } from '@/entities/pet.entity';
import { Service } from '@/entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '@/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Client, Service])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
