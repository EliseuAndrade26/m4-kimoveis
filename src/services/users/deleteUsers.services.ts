import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";

export default async function deleteUsersServices(
  idUser: number
): Promise<void> {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await usersRepository.findOne({
    where: {
      id: idUser,
    },
  });

  if (user!.admin === true) {
    throw new AppError("Insufficient permission", 403);
  }

  await usersRepository.softRemove(user!);
}
