// src/users/dto/create.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsInt()
  readonly age: number;

  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
