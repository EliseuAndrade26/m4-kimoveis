import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export default async function ensureUsersIsAdminMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (req.user.admin === false) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
}
