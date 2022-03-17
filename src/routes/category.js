import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { create, List, remove } from '../controllers/category'

const router = Router();

router.get("/category", checkAuth, List);
router.post('/category', checkAuth, create);
router.delete("/category/:id", remove);

export default router;