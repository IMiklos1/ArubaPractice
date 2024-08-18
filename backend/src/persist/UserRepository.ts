import { Repository, EntityRepository } from 'typeorm';
import { User } from '../models/entities/user';
import { IUserRepository } from './interfaces/IUserRepository';

@EntityRepository(User)
export class UserRepository extends Repository<User> implements IUserRepository {
    async createUser(user: User): Promise<User> {
        return await this.save(user);
    }

    async findUserById(id: number): Promise<User | null> {
        return await this.findOne({where: {id}});
    }

    async updateUser(id: number, user: Partial<User>): Promise<void> {
        await this.update(id, user);
    }

    async deleteUser(id: number): Promise<void> {
        await this.delete(id).then(() => {});
    }
}