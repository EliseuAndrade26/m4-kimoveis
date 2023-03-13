import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import {
  iCategories,
  iCreateRealEstate,
  iCreateRealEstateCategory,
  iReturnRealEstateSchemas,
} from "../../interfaces";
import { returnRealEstateSchemas } from "../../schemas";

export default async function createRealEstateServices(
  requestData: iCreateRealEstate
): Promise<iReturnRealEstateSchemas> {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: Category | null = await categoryRepository.findOneBy({
    name: requestData.categoryToCreate!.name,
  });

  let categoryToCreate: iCategories | null = null;

  if (findCategory) {
    categoryToCreate = findCategory;
  } else {
    const category: Category = categoryRepository.create(
      requestData.categoryToCreate!
    );

    await categoryRepository.save(category);

    categoryToCreate = category;
  }

  const addressExists: Address | null = await addressRepository.findOneBy({
    street: requestData.address.street,
    zipCode: requestData.address.zipCode,
  });

  if (addressExists) {
    throw new AppError("Address already exists", 409);
  }

  const newAddress: Address = addressRepository.create(requestData.address!);

  await addressRepository.save(newAddress);

  const requestRealEstateData: iCreateRealEstateCategory = {
    size: requestData.size,
    value: Number(requestData.value),
    address: newAddress,
    category: categoryToCreate,
  };

  const newRealEstate: RealEstate = realEstateRepository.create(
    requestRealEstateData
  );

  await realEstateRepository.save(newRealEstate);

  const findRealEstate = await realEstateRepository.findOne({
    where: {
      id: newRealEstate.id,
    },
    relations: {
      address: true,
      category: true,
    },
  });

  const realEstate = {
    ...findRealEstate,
    value: Number(findRealEstate!.value),
  };

  return returnRealEstateSchemas.parse(realEstate);
}
