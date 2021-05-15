import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService:UserService){}

    @Post()
    public create(@Body() user:User): NestResponse {
        const userCreated = this.userService.create(user);
        
        return new NestResponseBuilder()
                .withStatus(HttpStatus.CREATED)
                .withHeaders({
                    Location: `/users/${userCreated.name}`
                })
                .withBody(userCreated)
                .build();
    }

    @Get(':userName')
    public getUserByName(@Param('userName') userName: string) {
        const userFounded = this.userService.getUserByName(userName);
        if(!userFounded){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'user not found'
            });
        }
        return userFounded;
    }

}