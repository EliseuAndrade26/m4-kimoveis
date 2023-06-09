import { Router } from "express";
import {
  createUsersControllers,
  retrieveUsersListControllers,
  updateUsersControllers,
} from "../controllers";
import { deleteUsersControllers } from "../controllers/users.controllers";
import {
  ensureDataIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
  ensureUsersEmailExistsMiddlewares,
  ensureTokenIsValidMiddlewares,
  usersIsAdminMiddlewares,
  ensureUsersExistsMiddlewares,
  ensureUsersNotDeletedMiddlewares,
} from "../middlewares";
import { requestUsersSchemas, updatePartialUsersSchemas } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureUsersEmailExistsMiddlewares,
  ensureDataIsValidMiddlewares(requestUsersSchemas),
  createUsersControllers
);

usersRoutes.patch(
  "/:id",
  ensureUsersExistsMiddlewares,
  ensureTokenIsValidMiddlewares,
  usersIsAdminMiddlewares,
  ensureDataIsValidMiddlewares(updatePartialUsersSchemas),
  updateUsersControllers
);

usersRoutes.get(
  "",
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
  retrieveUsersListControllers
);

usersRoutes.delete(
  "/:id",
  ensureUsersExistsMiddlewares,
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
  ensureUsersNotDeletedMiddlewares,
  deleteUsersControllers
);
