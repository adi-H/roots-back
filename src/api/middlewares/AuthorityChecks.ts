import { AuthorityError } from '../../enums/AuthorityError';
import { NextFunction, Request, Response } from 'express';
import { Roles } from '../../enums/Roles';
import { Utilities } from '../services/Utilities';
import { User } from '../entities/User';

export const authenticationCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwt = req?.cookies?.jwt;

  try {
    req.currentUser = await Utilities.deserializeJWT(jwt);
    next();
  } catch (e) {
    res.status(401).end(AuthorityError.AUTHENTICATION);
  }
};

export const authorizationCheck = (roles: Roles[]) => {
  const checkFn = authorizationCheckFn(roles);

  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.currentUser;

    if (user && checkFn(user.role.id)) {
      next();
    } else {
      res.status(401).end(AuthorityError.AUTHORIZATION);
    }
  };
};

export const authorizationCheckFn = (roles: Roles[]) => {
  const roleIds = [...roles, Roles.ADMINISTRATOR].map((role) => role.valueOf());

  return (roleId: number) => roleIds.includes(roleId);
};

export default {
  canSkipApproval: (user: User) =>
    authorizationCheckFn([Roles.KAHAD_PLUGA])(user.role.id),
};
