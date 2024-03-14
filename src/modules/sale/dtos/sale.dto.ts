import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  serviceId: number[];

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 0 })
  clientId: number;
}
