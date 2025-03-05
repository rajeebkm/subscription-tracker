import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { getUsers, getUser } from '../controllers/user.controller.js';
const userRouter = Router();


userRouter.get('/', getUsers);

userRouter.get('/:id', authorize,getUser);

userRouter.post('/', (req, res) => {
    res.send({ title: 'CREATE user', message: 'User created successfully' });
});

userRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATE user', message: `User ${req.params.id} updated successfully` });
});

userRouter.delete('/:id', (req, res) => {
    res.send({ title: 'DELETE user', message: `User ${req.params.id} deleted successfully` });
});





export default userRouter;