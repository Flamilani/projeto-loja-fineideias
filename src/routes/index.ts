import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/search', SearchController.search);
router.get('/camisetas', PageController.camisetas);
router.get('/canecas', PageController.canecas);
router.get('/chaveiros', PageController.chaveiros);

export default router;
