import { User } from "../../models/entities/user";

export interface IUserRepository{
    createUser(user: User): Promise<User>;
    findUserById(id: number): Promise<User | null>;
    updateUser(id: number, user: Partial<User>): Promise<void>;
    deleteUser(id: number): Promise<void>;
}