import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export default async function ensureUsersEmailExistsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (findUser) {
    throw new AppError("Email already registered", 409);
  }

  return next();
}
