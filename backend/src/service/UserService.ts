// services/UserService.ts
import { IUserService } from './interfaces/IUserService';
import { IUserRepository } from '../persist/interfaces/IUserRepository';
import { DataSource, getCustomRepository } from 'typeorm';
import { User } from '../models/entities/user';
import { UserRepository } from '../persist/UserRepository';

export class UserService implements IUserService {
    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(user: User): Promise<User> {
        return this.userRepository.createUser(user);
    }

    async getUserById(id: number): Promise<User | null> {
        return this.userRepository.findUserById(id);
    }

    async validateByNameAndPassword(user:User):Promise<boolean>{
        return await this.userRepository.validateByNameAndPassword(user);
    }

    async updateUser(id: number, user: Partial<User>): Promise<void> {
        await this.userRepository.updateUser(id, user);
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.deleteUser(id);
    }
}
