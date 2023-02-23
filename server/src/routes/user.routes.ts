import { Router } from 'express';
import { UserControllers } from '../controllers/user.controllers';

const router = Router();

router.post('/', UserControllers.create );
router.get('/', UserControllers.getAll)

export default router;
