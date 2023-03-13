import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { iAllSchedules } from "../../interfaces";
import { allSchedulesSchemas } from "../../schemas";

export default async function retrieveSchedulesListServices(
  idSchedules: number
): Promise<any> {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const schedulesQueryBuilder =
    schedulesRepository.createQueryBuilder("schedule");

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealEstate: RealEstate | null = await realEstateRepository.findOne({
    where: {
      id: idSchedules,
    },
    relations: {
      address: true,
      category: true,
    },
  });

  if (!findRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const findSchedules: Array<Schedule> = await schedulesQueryBuilder
    .leftJoinAndSelect("schedule.realEstate", "realEstate")
    .leftJoinAndSelect("schedule.user", "user")
    .where("schedule.realEstate = :id", { id: findRealEstate!.id })
    .getMany();

  const filterRealEstate = findSchedules.map((elem) => {
    return {
      size: elem.realEstate.size,
      sold: elem.realEstate.sold,
      updatedAt: elem.realEstate.updatedAt,
      value: elem.realEstate.value,
    };
  });

  const filterSchedules = findSchedules.map((elem) => {
    return {
      id: elem.id,
      date: elem.date,
      hour: elem.hour,
      user: elem.user,
    };
  });

  const returnSchedules = {
    address: findRealEstate.address,
    category: findRealEstate.category,
    createdAt: findRealEstate.createdAt,
    id: findRealEstate.id,
    schedules: filterSchedules,
    size: filterRealEstate[0].size,
    sold: filterRealEstate[0].sold,
    updatedAt: filterRealEstate[0].updatedAt,
    value: filterRealEstate[0].value,
  };

  return returnSchedules;
}
