import { Request, Response } from "express";
import {
  iAllCategories,
  iAllRealEstateCategory,
  iCategories,
  iCreateCategories,
} from "../interfaces";
import {
  createCategoriesServices,
  retrieveCategoryListServices,
  retrieveCategoryRealEstateListServices,
} from "../services/categories";

export async function createCategoriesControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const categoryData: iCreateCategories = req.body;

  const category: iCategories = await createCategoriesServices(categoryData);

  return res.status(201).json(category);
}

export async function retrieveCategoryListControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const categories: iAllCategories = await retrieveCategoryListServices();

  return res.json(categories);
}

export async function retrieveCategoryRealEstateListControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const idCategory: number = Number(req.params.id);

  const categories: iAllRealEstateCategory =
    await retrieveCategoryRealEstateListServices(idCategory);

  return res.json(categories);
}
