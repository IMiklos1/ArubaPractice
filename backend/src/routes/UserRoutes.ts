import { Router } from 'express';
import { UserController } from '../controller/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', userController.createUser.bind(userController));

userRouter.get('/:id', userController.getUserById.bind(userController));

userRouter.get('/', userController.validateUser.bind(userController));

userRouter.put('/:id', userController.updateUser.bind(userController));

userRouter.delete('/:id', userController.deleteUser.bind(userController));

export default userRouter;
