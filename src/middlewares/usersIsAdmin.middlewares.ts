import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export default async function usersIsAdminMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (req.user.admin === true) {
    return next();
  }

  if (Number(req.params.id) !== req.user.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
}
