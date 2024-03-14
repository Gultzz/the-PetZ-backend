import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePetDto } from '../dtos/pet.dto';
import { PetService } from '../services/pet.service';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async createPetByClient(@Body() body: CreatePetDto) {
    return await this.petService.createPetByClient(body);
  }

  @Get('all')
  async getAllPets() {
    return await this.petService.getAllPets();
  }

  @Get(':id')
  async getPetById(@Param() param: { id: number }) {
    return await this.petService.getPetById(param.id);
  }
}
