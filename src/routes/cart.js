import { Router } from 'express';
import { listcard, addcard, listcards, removeCr } from '../controllers/cart'
const router = Router()

router.get("/carts" , listcard)
router.post("/carts" , addcard)
router.get('/carts/:user', listcards)
router.delete('/carts/:id', removeCr)



export default router