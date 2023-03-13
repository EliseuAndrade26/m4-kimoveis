import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iAllCategories } from "../../interfaces";
import { allCategoriesSchemas } from "../../schemas";

export default async function retrieveCategoryListServices(): Promise<iAllCategories> {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory: Array<Category> = await categoryRepository.find();

  const categoryList = allCategoriesSchemas.parse(findCategory);

  return categoryList;
}
