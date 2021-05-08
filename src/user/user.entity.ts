import { IsEmail, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class User{

    id: number;

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