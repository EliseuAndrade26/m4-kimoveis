import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export default async function usersIsAdminMiddlewares(
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

  if (findUser!.admin === true) {
    return next();
  }

  if (Number(req.params.id) !== req.user.id) {
    throw new AppError("Insufficient permission", 401);
  }

  return next();
}
