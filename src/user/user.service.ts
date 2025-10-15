import { Injectable } from '@nestjs/common';
import { registerDto } from 'src/auth/dto/registerUser.dto';

@Injectable()
export class UserService {
    createUser(registerUserDto: registerDto){
        
        return {message: "User Created Successfully"}
    }
}
