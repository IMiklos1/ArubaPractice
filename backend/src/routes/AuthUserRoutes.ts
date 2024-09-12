import { Router } from 'express';
import { AuthUserController } from '../controller/AuthUserController';

const authUserRouter = Router();
const authUserController = new AuthUserController();

authUserRouter.post('/signup', authUserController.create.bind(authUserController));

authUserRouter.post('/login', authUserController.login.bind(authUserController));

export default authUserRouter;
