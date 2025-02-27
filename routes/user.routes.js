import { Router } from 'express';

const userRouter = Router();


userRouter.get('/', (req, res) => {
    res.send({ title: 'GET all users', message: 'All users fetched successfully' });
});

userRouter.get('/:id', (req, res) => {
    res.send({ title: 'GET user details', message: `User ${req.params.id} fetched successfully` });
});

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