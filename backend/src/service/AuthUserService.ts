import { User } from "../models/entities/user";
import { LoginError } from "../models/enums/loginError";
import { AuthUserRepository } from "../persist/AuthUserRepository";
import { IAuthUserRepository } from "../persist/interfaces/IAuthUserRepository";
import { IAuthUserService } from "../service/interfaces/IAuthUserService";

export class AuthUserService implements IAuthUserService{
    authUserRepository: IAuthUserRepository;

    constructor(){
        this.authUserRepository = new AuthUserRepository();
    }

    register(user: User): Promise<User> {
        return this.authUserRepository.register(user);
    }
    login(user: User): Promise<LoginError | string> {
        return this.authUserRepository.login(user);
    }

}