import { Injectable } from '@nestjs/common';
import { AuthUser } from 'src/auth/dto/auth.dto';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserStore {
  users: AuthUser[] = [];
  count: number = 1;

  async save(user: AuthUser) {
    this.users.push({
      id: `${this.count}`,
      email: user.email,
      password: await hash(user.password, 10),
    });
    this.count += 1;
  }

  login(authDto: AuthUser) {
    const user = this.users.find((user) => user.email === authDto.email);
    if (!user) {
      throw new Error('user is not fount');
    } else {
      return user;
    }
    // if (compare(authDto.password, user.password)) {
    //   return sign(user, 'secret');
    // }
  }

  findById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }

  findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }

  get() {
    return this.users;
  }
}
