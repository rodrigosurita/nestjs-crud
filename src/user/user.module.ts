import { Module } from '@nestjs/common';
import { UniqueUsernameConstraint } from './unique-username.validator';
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService, UniqueUsernameConstraint],
  })
export class UserModule {}