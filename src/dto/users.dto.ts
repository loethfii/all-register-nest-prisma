import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UsersUpsertDto {
  @Type(() => String)
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @Type(() => String)
  @IsOptional()
  @IsString()
  last_name: string;

  @Type(() => IsEmail)
  @IsOptional()
  @IsEmail()
  email: string;

  @Type(() => IsEmail)
  @IsOptional()
  @IsEmail()
  profile_picture: string;
}
