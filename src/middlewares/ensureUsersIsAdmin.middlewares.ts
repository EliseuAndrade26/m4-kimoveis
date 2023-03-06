import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export default async function ensureUsersIsAdminMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser: User | null = await userRepository.findOne({
    where: {
      email: req.user.email,
    },
  });

  if (findUser!.admin === false) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
}
