// interfaces/IUserService.ts
import { User } from '../../models/entities/user';

export interface IUserService {
    createUser(user: User): Promise<User>;
    getUserById(id: number): Promise<User | null>;
    updateUser(id: number, user: Partial<User>): Promise<void>;
    deleteUser(id: number): Promise<void>;
}
