import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService:UserService){}

    @Post()
    public create(@Body() user:User):User{
        const userCreated = this.userService.create(user);
        return userCreated;
    }

    @Get(':userName')
    public getUserByName(@Param('userName') userName: string) {
        const userFounded = this.userService.getUserByName(userName);
        return userFounded;
    }

}