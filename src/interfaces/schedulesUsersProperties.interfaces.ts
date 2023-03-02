import { z } from "zod";
import {
  allSchedulesUsersPropertiesSchemas,
  requestSchedulesUsersPropertiesSchemas,
  schedulesUsersPropertiesSchemas,
  updateSchedulesUsersPropertiesSchemas,
} from "../schemas";

export type iCreateSchedulesUsersProperties = z.infer<
  typeof requestSchedulesUsersPropertiesSchemas
>;
export type iSchedulesUsersProperties = z.infer<
  typeof schedulesUsersPropertiesSchemas
>;
export type iPudateSchedulesUsersProperties = z.infer<
  typeof updateSchedulesUsersPropertiesSchemas
>;
export type iAllSchedulesUsersProperties = z.infer<
  typeof allSchedulesUsersPropertiesSchemas
>;
