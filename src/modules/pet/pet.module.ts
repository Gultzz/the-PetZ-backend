import { Module } from '@nestjs/common';
import { PetController } from './controllers/pet.controller';
import { PetService } from './services/pet.service';
import { Pet } from '@/entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '@/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Client])],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
