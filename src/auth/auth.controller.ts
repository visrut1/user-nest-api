import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthUser } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { compareSync } from 'bcrypt';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUser(@Body() authdto: AuthUser) {
    this.authService.save(authdto);
  }

  @Post('/signin')
  signInUser(@Body() authdto: AuthUser) {
    console.log('----------------------------------------------');

    console.log(this.authService.login(authdto));
    return this.authService.login(authdto);
  }

  @Get('/all')
  getAllUser() {
    console.log('in controller' + this.authService.getAll());
    return this.authService.getAll();
  }
}
