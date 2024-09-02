import { Repository, EntityRepository, DataSource } from 'typeorm';
import { User } from '../models/entities/user';
import { IUserRepository } from './interfaces/IUserRepository';
import { AppDataSource } from '../context/dataSource';

export class UserRepository extends Repository<User> implements IUserRepository {
    bcrypt = require('bcrypt');
    jwt = require('jsonwebtoken');

    constructor(){
        super(User, AppDataSource.createEntityManager());
    }

    async createUser(user: User): Promise<User> {
        user.password = await this.bcrypt.hash(user.password, 12);

        return await this.save(user);
    }

    async validateByNameAndPassword(user:User): Promise<boolean>{
        const foundUser = await this.findOneBy({
            name: user.name,
            password: user.password,
        })

        if(foundUser){
            return true;
        }
        else{
            return false;
        }
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