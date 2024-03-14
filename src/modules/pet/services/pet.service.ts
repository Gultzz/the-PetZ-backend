import { Client } from '@/entities/client.entity';
import { Pet } from '@/entities/pet.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from '../dtos/pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async createPetByClient(body: CreatePetDto): Promise<void> {
    const client = await this.clientRepository.findOneOrFail({
      where: {
        id: body.clientId,
        deleted: false,
      },
    });

    const petEntity = this.petRepository.create(body);
    petEntity.client = client;
    await this.petRepository.save(petEntity);
  }

  async getAllPets(): Promise<Pet[]> {
    return await this.petRepository.find({ where: { deleted: false } });
  }

  async getPetById(id: number): Promise<Pet> {
    return await this.petRepository.findOneOrFail({
      relations: ['client'],
      where: {
        id,
        deleted: false,
      },
    });
  }
}
