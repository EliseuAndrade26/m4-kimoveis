import { Router } from "express";
import {
  createCategoriesControllers,
  retrieveCategoryListControllers,
  retrieveCategoryRealEstateListControllers,
} from "../controllers";
import {
  ensureDataIsValidMiddlewares,
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
} from "../middlewares";
import { requestCategoriesSchemas } from "../schemas";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureDataIsValidMiddlewares(requestCategoriesSchemas),
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
  createCategoriesControllers
);

categoriesRoutes.get("", retrieveCategoryListControllers);

categoriesRoutes.get(
  "/:id/realEstate",
  retrieveCategoryRealEstateListControllers
);
