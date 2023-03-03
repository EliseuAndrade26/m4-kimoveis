import { Router } from "express";
import {
  createUsersControllers,
  retrieveUsersListControllers,
} from "../controllers";
import {
  ensureDataIsValidMiddlewares,
  ensureUsersIsAdminMiddleware,
  ensureUsersEmailExistsMiddlewares,
  ensureTokenIsValidMiddleware,
} from "../middlewares";
import { requestUsersSchemas } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureUsersEmailExistsMiddlewares,
  ensureDataIsValidMiddlewares(requestUsersSchemas),
  createUsersControllers
);

usersRoutes.patch("/:id");

usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUsersIsAdminMiddleware,
  retrieveUsersListControllers
);

usersRoutes.delete("/:id");
