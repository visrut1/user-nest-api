import { Injectable } from '@nestjs/common';
import { AuthUser } from './dto/auth.dto';
import { UserStore } from 'src/store/user-store/user-store';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userStore: UserStore,
    private readonly jwtService: JwtService,
  ) {}

  login(authDto: AuthUser) {
    const user = this.userStore.login(authDto);
    if (!user) {
      throw new Error('user not found');
    }
    return this.jwtService.sign(user);
  }

  save(authDto: AuthUser) {
    this.userStore.save(authDto);
  }

  getAll() {
    return this.userStore.get();
  }
}
