import { Professional } from './../professional/professional';
export class User {
    userId: number;
    fullName: string;
    email: string;
    password: string;
    school: string;
    isActive: number;
    professional: Professional;

    constructor() {
        this.professional = new Professional();
    }
}
