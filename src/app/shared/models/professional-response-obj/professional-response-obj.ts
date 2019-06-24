import { Professional } from './../professional/professional';
export class ProfessionalResponseObj {
    response: string;
    professional: Professional;
    professionalId: number;

    constructor() {
    this.professional = new Professional();
    }
}