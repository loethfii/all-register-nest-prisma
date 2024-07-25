import { Global, Module } from '@nestjs/common';
import { JwtModule as NestJwtModule, JwtService } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    NestJwtModule.register({
      global: true,
      secret: 'rahasia', // Anda bisa mengganti dengan kunci rahasia Anda
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
