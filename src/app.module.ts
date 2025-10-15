import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, UserModule, MongooseModule.forRoot('mongodb+srv://vighnesh:vicky123@nestjs.bpdy5m1.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
