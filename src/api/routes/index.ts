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
import quiz from './quiz';
import { authenticationCheck } from '../middlewares/AuthorityChecks';
import { PathParams } from 'express-serve-static-core';

const routes = Router();

function authorizedRoute(route: PathParams, router: Router) {
  routes.use(route, authenticationCheck, router);
}

routes.use('/auth', auth);
routes.use('/health', health);
authorizedRoute('/user', user);
authorizedRoute('/building', building);
authorizedRoute('/class', classes);
authorizedRoute('/classAssign', classAssigns);
authorizedRoute('/unit', unit);
authorizedRoute('/url', url);
authorizedRoute('/items', items);
authorizedRoute('/classType', classType);
authorizedRoute('/attendance', attendance);
authorizedRoute('/recipient', recipient);
authorizedRoute('/inquiry', inquiry);
authorizedRoute('/role', role);
authorizedRoute('/quiz', quiz);

export default routes;
