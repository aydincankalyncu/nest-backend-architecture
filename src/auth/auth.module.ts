import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from 'src/database/mongo/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '3000s'}
    }),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
