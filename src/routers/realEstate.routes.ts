import { Router } from "express";
import {
  createRealEstateControllers,
  retrieveRealEstateListControllers,
} from "../controllers";
import {
  ensureDataIsValidMiddlewares,
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
} from "../middlewares";
import { requestRealEstateSchemas } from "../schemas";

export const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureDataIsValidMiddlewares(requestRealEstateSchemas),
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
  createRealEstateControllers
);

realEstateRoutes.get("", retrieveRealEstateListControllers);
