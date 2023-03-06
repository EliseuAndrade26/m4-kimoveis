import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { iCategories, iCreateCategories } from "../../interfaces";
import { categoriesSchemas } from "../../schemas";

export default async function createCategoriesServices(
  categoryData: iCreateCategories
): Promise<iCategories> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: Category | null = await categoryRepository.findOneBy({
    name: categoryData.name,
  });

  if (findCategory) {
    throw new AppError("Category already exists", 409);
  }

  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  return categoriesSchemas.parse(Category);
}
