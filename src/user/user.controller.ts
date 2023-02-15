import { Controller, Get } from '@nestjs/common';

@Controller({ path: '/users', version: '1' })
export class UserController {
  @Get()
  getAllUsers() {
    return [];
  }

  @Get('/:id')
  getById(id: string) {
    console.log(id);
  }
}
