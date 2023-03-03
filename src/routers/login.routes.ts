import { Router } from "express";
import { createLoginControllers } from "../controllers";
import {
  ensureDataIsValidMiddlewares,
  ensureUsersExistsMiddlewares,
  ensureUsersNotDeleted,
} from "../middlewares";
import { createLoginSchema } from "../schemas";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureUsersNotDeleted,
  ensureDataIsValidMiddlewares(createLoginSchema),
  createLoginControllers
);
