import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersUpsertDto } from 'src/dto/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async health() {
    return 'ok';
  }

  async returnValueGoogle(payload: any) {
    return payload;
  }

  async registerUser(body: UsersUpsertDto) {
    console.log(body);
    await this.prisma.$transaction(async (tx) => {
      const checkingData = await tx.users.count({
        where: { email: body.email },
      });
      if (checkingData > 0) {
        return body;
      }
      const create = await tx.users.create({
        data: {
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          profile_picture: body.profile_picture,
        },
      });
      return {
        create,
      };
    });
  }
}
