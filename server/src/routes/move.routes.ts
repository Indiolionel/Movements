import { Router } from 'express';
import { MoveControllers } from '../controllers/move.controllers';

const router = Router();

router.post('/', MoveControllers.create);
router.get('/', MoveControllers.getAll)

export default router;
