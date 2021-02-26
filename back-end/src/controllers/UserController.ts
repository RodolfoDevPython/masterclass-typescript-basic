import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: "Rodolfo", email: "Rodolfosilvaa16@outlook.com" },
    { name: "Romulo", email: "Romulo16@outlook.com" }
]

export default {

    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: { name: "Rodolfo", email: "Rodolfo@teste.com" },
            message: { subject: "Bem-vindo ao sistema", body: "Seja bem-vindo" }
        });


        return res.send(); 

    }

}