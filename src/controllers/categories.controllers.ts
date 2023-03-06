import { Request, Response } from "express";
import { iCategories, iCreateCategories } from "../interfaces";
import { createCategoriesServices } from "../services/categories";

export async function createCategoriesControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const categoryData: iCreateCategories = req.body;

  const category: iCategories = await createCategoriesServices(categoryData);

  return res.status(201).json(category);
}
