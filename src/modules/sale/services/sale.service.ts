import { Client } from '@/entities/client.entity';
import { Sale } from '@/entities/sale.entity';
import { Service } from '@/entities/service.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateSaleDto } from '../dtos/sale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async createSale(body: CreateSaleDto): Promise<void> {
    const client = await this.clientRepository.findOneOrFail({
      where: {
        id: body.clientId,
        deleted: false,
      },
    });

    const services = await this.serviceRepository.find({
      where: { id: In(body.serviceId), deleted: false },
    });
    const totalPrice = services.reduce(
      (acm, currentValue) => acm + currentValue.price,
      0,
    );

    const saleEntity = this.saleRepository.create({
      price: totalPrice,
      service: services,
      client: client,
    });

    await this.saleRepository.save(saleEntity);
  }

  async getAllSales(): Promise<Sale[]> {
    return await this.saleRepository.find();
  }

  async getSaleById(id: number): Promise<Sale> {
    return await this.saleRepository.findOneOrFail({ where: { id } });
  }
}
