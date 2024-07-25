import { Body, Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersUpsertDto } from 'src/dto/users.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('health')
  async health() {
    try {
      return this.usersService.health();
    } catch (error) {
      throw error;
    }
  }

  //GOOGLE LOGIN
  @Get('login/google')
  @UseGuards(AuthGuard('google'))
  async loginUserGoogle() {
    try {
    } catch (error) {
      throw error;
    }
  }

  //Kembalian data google
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    // handles the Google OAuth2 callback
    const user = req.user;
    const body: UsersUpsertDto = {
      first_name: user.name,
      email: user.email,
      profile_picture: user.picture,
      last_name: '',
    };
    const userData = this.usersService.registerUser(body);

    localStorage.setItem('userData', JSON.stringify(userData));

    res.redirect('https://www.youtube.com');
  }

  //Register User
  @Get('register')
  async registerUser(@Body() body: UsersUpsertDto) {
    try {
      return this.usersService.registerUser(body);
    } catch (error) {
      throw error;
    }
  }
}
