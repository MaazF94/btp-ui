import { User } from '../user/user';

export class UserResponseObj {
    response: string;
    user: User;

    constructor() {
    this.user = new User();
    }
}
