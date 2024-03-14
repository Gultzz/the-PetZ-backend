import { Client } from '@/entities/client.entity';
import { Sale } from '@/entities/sale.entity';
import { Service } from '@/entities/service.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleController } from './controllers/sale.controller';
import { SaleService } from './services/sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Client, Sale])],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
