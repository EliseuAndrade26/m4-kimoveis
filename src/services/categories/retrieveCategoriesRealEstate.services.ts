import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iAllRealEstateCategory } from "../../interfaces";

export default async function retrieveCategoryRealEstateListServices(
  idCategory: number
): Promise<iAllRealEstateCategory> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findCategory: Category | null = await categoryRepository.findOneBy({
    id: idCategory,
  });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }

  const findRealEstates: Array<RealEstate> | null =
    await realEstateRepository.find({
      relations: {
        category: true,
      },
    });

  const findedRealEstatesPerCategory = findRealEstates.filter(
    (elem) => elem.category!.id === findCategory!.id
  );

  const realEstates = findedRealEstatesPerCategory.map((elem) => {
    return {
      id: elem.id,
      size: elem.size,
      sold: elem.sold,
      value: elem.value,
      createdAt: elem.createdAt,
      updatedAt: elem.updatedAt,
    };
  });

  const categoryList = {
    ...findCategory,
    realEstate: realEstates,
  };

  return categoryList;
}
