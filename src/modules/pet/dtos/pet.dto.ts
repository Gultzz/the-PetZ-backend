import { Gender } from '@/enums/gender.enum';
import { Specie } from '@/enums/specie.enum';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  sterilization: boolean;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 3 })
  weight: number;

  @IsNotEmpty()
  @IsEnum(Specie)
  specie: Specie;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  breed: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  clientId: number;
}
