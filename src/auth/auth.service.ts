import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { registerDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}
    
    async registerUser(registerUserDto: registerDto) {
        // Logic for user register
        /**
         * 1. Check if email Already exist
         * 2. Hash the password
         * 3. store user into db
         * 4. generate jwt token
         * 5. send token in response  
        */

        // console.log("registerUserDto:", registerUserDto)

        const saltRounds = 10
        const hash = await bcrypt.hash(registerUserDto.password, saltRounds);

        return {message: "hello from auth", User: this.userService.createUser({...registerUserDto}),...registerUserDto, password:hash }
    }


    // test(): string {
    //     return "Hello, I'm Test"
    // }
}
