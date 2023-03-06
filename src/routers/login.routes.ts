import { Router } from "express";
import { createLoginControllers } from "../controllers";
import { ensureDataIsValidMiddlewares } from "../middlewares";
import { createLoginSchema } from "../schemas";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddlewares(createLoginSchema),
  createLoginControllers
);
