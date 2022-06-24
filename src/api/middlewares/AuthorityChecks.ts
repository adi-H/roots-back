import { AuthorityError } from './../../enums/AuthorityError';
import { NextFunction, Request, Response } from 'express';
import { Roles } from '../../enums/Roles';
import { Utilities } from '../services/Utilities';

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
  const roleIds = [...roles, Roles.ADMINISTRATOR].map((role) => role.valueOf());

  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.currentUser;

    if (user && roleIds.includes(user.role.id)) {
      next();
    } else {
      res.status(401).end(AuthorityError.AUTHORIZATION);
    }
  };
};
