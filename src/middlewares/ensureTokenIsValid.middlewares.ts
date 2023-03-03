import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";
import "dotenv/config";

export default function ensureTokenIsValidMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token is missing", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    req.user = {
      id: Number(decoded.sub),
      email: decoded.email,
    };

    return next();
  });
}
