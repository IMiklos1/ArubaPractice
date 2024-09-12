import { Repository } from 'typeorm';
import { IAuthUserRepository } from './interfaces/IAuthUserRepository';
import { User } from '../models/entities/user';
import { AppDataSource } from '../context/dataSource';
import { LoginError } from '../models/enums/loginError';

export class AuthUserRepository extends Repository<User> implements IAuthUserRepository {
    bcrypt = require('bcrypt');
    jwt = require('jsonwebtoken');

    constructor(){
        super(User, AppDataSource.createEntityManager());
    }


    public async register(user: User):Promise<User> {
        const entity = this.create(user);

        entity.password = await this.bcrypt.hash(entity.password, 12);

        return await this.save(entity);
    }

    public async login(user: User): Promise<LoginError | string>{
        const existing:User | null = await this.findOne({
            where: { email: user.email },
            select: ['id', 'password']
        });
        
        if (!existing) {
            return LoginError['No user exists with this email.'];
        }

        const passwordMatches = await this.bcrypt.compare(user.password, existing!.password);
        if (!passwordMatches) {
            return LoginError['Incorrect email or password.']
        }
        
        return this.jwt.sign({ id: user.id }, 'mySecretKey', { expiresIn: '2w' });
    }
}