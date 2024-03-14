import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSaleDto } from '../dtos/sale.dto';
import { SaleService } from '../services/sale.service';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  async createSale(@Body() body: CreateSaleDto) {
    return await this.saleService.createSale(body);
  }

  @Get('all')
  async getAllSales() {
    console.log('Chamou');
    return await this.saleService.getAllSales();
  }

  @Get(':id')
  async getSaleById(@Param() param: { id: number }) {
    return await this.saleService.getSaleById(param.id);
  }
}
