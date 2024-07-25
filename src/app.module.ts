import { Module } from '@nestjs/common';
import { Service } from './modules/modules.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [Service, PrismaModule, JwtModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
