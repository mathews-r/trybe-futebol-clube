import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchsController = new MatchController();
const matchRouter = Router();

matchRouter.get('/', (req, res) => matchsController.getMatches(req, res));
// matchRouter.get('/?', (req, res) => matchsController.getMatchesInProgress(req, res));

export default matchRouter;