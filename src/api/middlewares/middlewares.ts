import { NextFunction, Request, Response } from 'express';
import * as jose from 'jose';
import config from '../../config';
import { User } from '../entities/User';

const isUserAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path.includes('login') || req.path.includes('health')) {
    next();
    return;
  }

  const jwt = req.cookies.jwt;

  try {
    req.currentUser = await verifyJWT(jwt);
    next();
  } catch (e) {
    res.status(401).end();
  }
};

const verifyJWT = async (jwt: string) => {
  const result = await jose.jwtVerify(jwt, await config.getPublicKey());
  delete result.payload.iat;

  return (result.payload as unknown) as User;
};

export { isUserAuthenticated, verifyJWT };
