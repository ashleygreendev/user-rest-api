import express from 'express';
import UsersController from '../controllers/users';

const router = express.Router();

router.get('/api/v1/users', UsersController.getAllUsers);
router.get('/api/v1/users/:id', UsersController.getUser);
router.post('/api/v1/users', UsersController.createUser);
router.put('/api/v1/users/:id', UsersController.updateUser);
router.delete('/api/v1/users/:id', UsersController.deleteUser);

export default router;