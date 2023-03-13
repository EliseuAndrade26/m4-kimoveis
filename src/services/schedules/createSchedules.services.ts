import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import {
  iCreateSchedules,
  iNewCreateSchedules,
  iSchedules,
} from "../../interfaces";
import { schedulesSchemas } from "../../schemas";

export default async function createScheduleServices(
  scheduleData: iCreateSchedules,
  idUser: number
): Promise<iSchedules> {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const findRealEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: scheduleData.realEstate!,
    },
    relations: {
      address: true,
      category: true,
    },
  });

  if (!findRealEstate) {
    throw new AppError("Real Estate not found", 404);
  }

  const findUser: User | null = await usersRepository.findOneBy({
    id: idUser,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const newScheduleData: iNewCreateSchedules = {
    ...scheduleData,
    realEstate: findRealEstate,
    user: findUser,
  };

  const schedule: Schedule = scheduleRepository.create(newScheduleData);

  await scheduleRepository.save(schedule);

  return schedulesSchemas.parse(schedule);
}
