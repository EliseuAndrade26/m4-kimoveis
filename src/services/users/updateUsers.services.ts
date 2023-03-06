import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUpdateUsers } from "../../interfaces";
import { usersWithoutPasswordSchemas } from "../../schemas";

export default async function updateUsersServices(
  newUserData: iUpdateUsers,
  idUser: number
): Promise<iUpdateUsers> {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await usersRepository.findOneBy({
    id: idUser,
  });

  const user: User = usersRepository.create({
    ...oldUserData,
    ...newUserData,
  });

  await usersRepository.save(user);

  return usersWithoutPasswordSchemas.parse(user);
}
