import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    private users:Array<User> = [{
        id: 1,
        name:  'Rodrigo',
        email: 'rodrigosurita@live.com',
        password: '123456',
        fullName: 'Rodrigo Surita da Silva',
        createDate: new Date()
    }];

    public create(user: User): User{
        user.createDate = new Date();
        this.users.push(user);
        return user;
    }

    public getUserByName(userName: string):User {
        return this.users.find(user => user.name == userName);
    }

}