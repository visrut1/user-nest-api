import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [UserController],
})
export class UserModule {}
