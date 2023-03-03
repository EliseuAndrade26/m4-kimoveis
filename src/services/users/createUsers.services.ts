import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iCreateUsers } from "../../interfaces";
import { iUsersWithoutPassword } from "../../interfaces/users.interfaces";
import { usersWithoutPasswordSchemas } from "../../schemas";

export default async function createUsersServices(
  userData: iCreateUsers
): Promise<iUsersWithoutPassword> {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = usersRepository.create(userData);

  await usersRepository.save(user);

  return usersWithoutPasswordSchemas.parse(user);
}
