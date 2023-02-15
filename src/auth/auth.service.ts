import { Injectable } from '@nestjs/common';
import { AuthUser } from './dto/auth.dto';
import { UserStore } from 'src/store/user-store/user-store';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userStore: UserStore) {}

  login(authDto: AuthUser) {
    return this.userStore.login(authDto);
  }

  save(authDto: AuthUser) {
    this.userStore.save(authDto);
  }

  getAll() {
    return this.userStore.get();
  }
}
