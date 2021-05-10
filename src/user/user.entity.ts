import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { UniqueUsername } from './unique-username.validator';

export class User{

    id: number;

    @UniqueUsername({
        message: "name already exists"
    })
    @IsString({
        message: 'name must me a string'
    })
    name:  string;

    @IsEmail({}, {
        message: 'invalid email'
    })
    email: string;

    @IsNotEmpty({
        message: 'password is required'
    })
    password: string;

    @IsString({
        message: 'fullName must me a string'
    })
    fullName: string;

    createDate: Date;
}