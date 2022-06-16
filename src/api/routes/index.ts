import { Router } from 'express';
import auth from './auth';
import user from './user';
import building from './building';
import classes from './class';
import classAssigns from './classAssign';
import unit from './unit';
import url from './url';
import items from './items';
import classType from './classType';
import attendance from './attendance';
import recipient from './recipient';
import inquiry from './inquiry';
import health from './health';
import role from './role';

const routes = Router();

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/building', building);
routes.use('/class', classes);
routes.use('/classAssign', classAssigns);
routes.use('/unit', unit);
routes.use('/url', url);
routes.use('/items', items);
routes.use('/classType', classType);
routes.use('/attendance', attendance);
routes.use('/recipient', recipient);
routes.use('/inquiry', inquiry);
routes.use('/health', health);
routes.use('/role', role);

export default routes;
