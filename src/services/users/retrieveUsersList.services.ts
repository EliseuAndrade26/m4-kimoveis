import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iAllUsers } from "../../interfaces";
import { allUsersSchemas } from "../../schemas";

export default async function retrieveUsersListServices(): Promise<iAllUsers> {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers: Array<User> = await usersRepository.find();

  const usersList = allUsersSchemas.parse(findUsers);

  return usersList;
}
