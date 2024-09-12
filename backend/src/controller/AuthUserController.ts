import { Request, Response } from 'express';
import { User } from "../models/entities/user";
import { AuthUserService } from "../service/AuthUserService";
import { IAuthUserService } from "../service/interfaces/IAuthUserService";
import { LoginError } from '../models/enums/loginError';

export class AuthUserController { // TODO: test the auth and create frontend for it
    authUserService : IAuthUserService = new AuthUserService();

    async create(req: Request, res: Response) : Promise<Response>{
        const userData: User = req.body;
        try {
            const user = await this.authUserService.register(userData);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to register user.' });
        }
    };

    async login(req: Request, res: Response) : Promise<Response>{
        const userData: User = req.body;
        try {
            const loginResult: LoginError | string = await this.authUserService.login(userData);
            return res.status(201).json(loginResult);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to create user' });
        }
    };
}