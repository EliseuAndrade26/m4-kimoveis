import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iAllRealEstate } from "../../interfaces";
import { allRealEstateSchemas } from "../../schemas";

export default async function retrieveRealEstateListServices(): Promise<iAllRealEstate> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealEstate: Array<RealEstate> = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  const realEstateList = allRealEstateSchemas.parse(findRealEstate);

  return realEstateList;
}
