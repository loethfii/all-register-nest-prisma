import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './utils/google.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Jika Anda ingin ConfigModule tersedia secara global
    }),
    PassportModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, GoogleStrategy],
})
export class UsersModule {}
