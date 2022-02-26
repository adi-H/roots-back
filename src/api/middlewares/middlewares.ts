import { NextFunction, Request, Response } from 'express';
import * as jose from 'jose';
import config from '../../config';
import { User } from '../entities/User';

const isUserAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.path.includes('login')) {
    next();
    return;
  }

  const jwt = req.cookies.jwt;

  try {
    const result = await jose.jwtVerify(jwt, await config.getPublicKey());
    delete result.payload.iat;
    req.currentUser = (result.payload as unknown) as User;
    next();
  } catch (e) {
    res.status(401).end();
  }
};

export { isUserAuthenticated };
