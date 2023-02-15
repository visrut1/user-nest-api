import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [UserModule, AuthModule, StoreModule],
  controllers: [],
})
export class AppModule {}
