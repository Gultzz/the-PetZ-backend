import { CreateClientDto } from '../dtos/client.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientService } from '../services/client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async createClient(@Body() body: CreateClientDto) {
    return await this.clientService.createClient(body);
  }

  @Get('all')
  async getAllClients() {
    return await this.clientService.getAllClients();
  }

  @Get(':id')
  async getClientById(@Param() param: { id: number }) {
    return await this.clientService.getClientById(param.id);
  }

  @Delete(':id')
  async deleteClient(@Param() param: { id: number }) {
    return await this.clientService.deleteClient(param.id);
  }
}
