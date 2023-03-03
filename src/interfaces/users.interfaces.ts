import { z } from "zod";
import {
  allUsersSchemas,
  requestUsersSchemas,
  updateUsersSchemas,
  usersSchemas,
  usersWithoutPasswordSchemas,
} from "../schemas";

export type iCreateUsers = z.infer<typeof requestUsersSchemas>;
export type iUsers = z.infer<typeof usersSchemas>;
export type iUpdateUsers = z.infer<typeof updateUsersSchemas>;
export type iAllUsers = z.infer<typeof allUsersSchemas>;
export type iUsersWithoutPassword = z.infer<typeof usersWithoutPasswordSchemas>;
