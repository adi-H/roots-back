import { Router } from 'express';
import auth from './auth';
import user from './user';
import building from './building';
import classes from './class';
import classAssigns from './classAssign';
import unit from './unit';
import url from './url';
import classType from './classType';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/building', building);
routes.use('/class', classes);
routes.use('/classAssign', classAssigns);
routes.use('/unit', unit);
routes.use('/url', url);
routes.use('/classType', classType);

export default routes;
