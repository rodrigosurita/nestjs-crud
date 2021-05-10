import { Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';
import { UserService } from './user.service';

@Injectable()
@ValidatorConstraint()
export class UniqueUsernameConstraint implements ValidatorConstraintInterface {
    constructor(private userService: UserService){}
    validate(userName: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.userService.getUserByName(userName);
    }
}

export function UniqueUsername(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UniqueUsernameConstraint,
        });
    };
}