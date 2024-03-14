import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateServiceDto } from '../dtos/service.dto';
import { ServiceService } from '../services/service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  async createService(@Body() body: CreateServiceDto) {
    return await this.serviceService.createService(body);
  }

  @Get('all')
  async getAllServices() {
    return await this.serviceService.getAllServices();
  }

  @Get(':id')
  async getServiceById(@Param() param: { id: number }) {
    return await this.serviceService.getServiceById(param.id);
  }

  @Delete(':id')
  async deleteService(@Param() param: { id: number }) {
    return await this.serviceService.deleteService(param.id);
  }
}
