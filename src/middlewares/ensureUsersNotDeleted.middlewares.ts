import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export default async function ensureUsersNotDeleted(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: req.body.id,
    },
  });

  if (findUser!.deletedAt !== null) {
    throw new AppError("User not found", 404);
  }

  return next();
}
