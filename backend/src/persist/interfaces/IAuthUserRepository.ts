import { User } from "../../models/entities/user";
import { LoginError } from "../../models/enums/loginError";

export interface IAuthUserRepository{
    register(user: User): Promise<User>;
    login(user: User): Promise<LoginError | string>;    
}