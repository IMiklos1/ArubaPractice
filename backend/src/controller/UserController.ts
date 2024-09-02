// controllers/UserController.ts
import { Request, Response } from 'express';
import { IUserService } from '../service/interfaces/IUserService';
import { UserService } from '../service/UserService';
import { User } from '../models/entities/user';
import { DataSource } from 'typeorm';

export class UserController {
    private userService: IUserService;

    constructor() {
        this.userService = new UserService();
    }

    async createUser(req: Request, res: Response): Promise<Response> {
        const userData: User = req.body;
        try {
            const user = await this.userService.createUser(userData);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: 'Failed to create user' });
        }
    }

    async getUserById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        try {
            const user = await this.userService.getUserById(id);
            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Failed to retrieve user' });
        }
    }

    async validateUser(req: Request, res: Response): Promise<Response> {
        try {
            const valid = await this.userService.validateByNameAndPassword(req.body);
            if (valid) {
                return res.status(200).json(valid);
            } else {
                return res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Failed to retrieve user' });
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        const userData: Partial<User> = req.body;
        try {
            await this.userService.updateUser(id, userData);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Failed to update user' });
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id, 10);
        try {
            await this.userService.deleteUser(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}
