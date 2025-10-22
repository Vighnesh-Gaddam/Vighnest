import { ConflictException, Injectable } from '@nestjs/common';
import { registerDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(registerUserDto: registerDto) {
    try {
      return await this.userModel.create({
        fname: registerUserDto.fname,
        lname: registerUserDto.lname,
        email: registerUserDto.email,
        password: registerUserDto.password,
      });
    } catch (err: unknown) {
      console.log(err);
      const e = err as { code: number };

      if (e.code === 11000) {
        throw new ConflictException('Email already exists');
      }
    }
    // return { message: 'User Created Successfully', User: registerUserDto };
  }
}
