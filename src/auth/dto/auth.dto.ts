import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class AuthUser {
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8 })
  password: string;
}
