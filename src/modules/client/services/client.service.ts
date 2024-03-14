import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '@/entities/client.entity';
import { CreateClientDto } from '../dtos/client.dto';
import { Pet } from '@/entities/pet.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async createClient(body: CreateClientDto): Promise<void> {
    const entity = this.clientRepository.create(body);
    await this.clientRepository.save(entity);
  }

  async getAllClients(): Promise<Client[]> {
    return await this.clientRepository.find({
      where: { deleted: false },
      relations: ['pet'],
      select: ['name', 'id', 'pet'],
    });
  }

  async getClientById(id: number): Promise<Client> {
    return await this.clientRepository.findOneOrFail({
      where: { id, deleted: false },
      relations: ['pet'],
    });
  }

  async deleteClient(id: number): Promise<void> {
    const client = await this.clientRepository.findOneOrFail({
      where: { id },
      relations: ['pet'],
    });

    client.pet.map((pet) => {
      const updatedPet = { ...pet, deleted: true };
      return this.petRepository.save(updatedPet);
    });

    client.deleted = true;
    await this.clientRepository.save(client);
  }
}
