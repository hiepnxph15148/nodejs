import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { create, list, remove,read,update } from '../controllers/category'


const router = Router();

router.get("/categories", list);
router.post('/categories', create);
router.get("/categories/:slug", read);
router.delete("/categories/:id",remove)
router.put("/categories/:id",update)

export default router;