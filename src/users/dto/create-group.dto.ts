import { IsString, IsArray, IsInt } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @IsInt({ each: true })
  userIds: number[];
}
