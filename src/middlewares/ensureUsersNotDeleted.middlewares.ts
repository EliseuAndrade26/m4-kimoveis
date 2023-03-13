import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export default async function ensureUsersNotDeletedMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const idUser: number = Number(req.params.id);

  const findUser: User | null = await userRepository.findOneBy({
    id: idUser,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return next();
}
