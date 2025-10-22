import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from './dto/registerUser.dto';

// My Approach Correct must use Approach
// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService: AuthService) {}
//     @Get()
//     test(): string{
//         return this.authService.test();
//     }

//     @Post('register')
//     register():string{
//         return this.authService.register();
//     }
// }

// YT Approach

@Controller('auth')
export class AuthController {
  /**
    authService: AuthService;

    constructor(authService: AuthService){
        this.authService = authService;
    }
     */
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: registerDto) {
    const createdUser = this.authService.registerUser(registerUserDto);
    return createdUser;
  }
}
