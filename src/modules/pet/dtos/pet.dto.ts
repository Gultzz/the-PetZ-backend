import { Coat } from '@/enums/coat.enum';
import { Gender } from '@/enums/gender.enum';
import { Specie } from '@/enums/specie.enum';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePetDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsEnum(Coat)
  coat: Coat;

  @IsNotEmpty()
  sterilization: boolean;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 3 })
  weight: number;

  @IsNotEmpty()
  @IsEnum(Specie)
  specie: Specie;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  birthdate: Date;

  @IsNotEmpty()
  breed: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  clientId: number;
}
