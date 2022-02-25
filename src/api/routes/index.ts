import { Router } from 'express';
import auth from './auth';
import user from './user';
import building from './building';
import classes from './class';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/building', building);
routes.use('/class', classes);

export default routes;
