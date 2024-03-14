import { Service } from '@/entities/service.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceDto } from '../dtos/service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async createService(body: CreateServiceDto): Promise<void> {
    const service = this.serviceRepository.create(body);
    await this.serviceRepository.save(service);
  }

  async getAllServices(): Promise<Service[]> {
    return await this.serviceRepository.find({ where: { deleted: false } });
  }

  async getServiceById(id: number): Promise<Service> {
    return await this.serviceRepository.findOneOrFail({
      where: { id, deleted: false },
    });
  }

  async deleteService(id: number): Promise<void> {
    const service = await this.serviceRepository.findOneOrFail({
      where: { id, deleted: false },
    });
    service.deleted = true;
    await this.serviceRepository.save(service);
  }
}
