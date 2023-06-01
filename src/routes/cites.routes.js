import { Router } from "express";
import { createCites, delCitesById, getCites, getCitesById, updateCitesById } from "../controllers/citesController";
const router = Router();

router.get('/oficinas', getCites)
router.get('/oficinas/:id', getCitesById)
router.post('/oficinas', createCites)
router.delete('/oficinas/:id', delCitesById)
router.put('/oficinas/:id', updateCitesById)

export default router