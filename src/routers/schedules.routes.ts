import { Router } from "express";
import {
  createScheduleControllers,
  retrieveSchedulesListControllers,
} from "../controllers";
import {
  ensureDataIsValidMiddlewares,
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
} from "../middlewares";
import { requestSchedulesSchemas } from "../schemas";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddlewares,
  ensureDataIsValidMiddlewares(requestSchedulesSchemas),
  createScheduleControllers
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddlewares,
  ensureUsersIsAdminMiddlewares,
  retrieveSchedulesListControllers
);
