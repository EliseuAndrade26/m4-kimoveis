import { DeepPartial } from "typeorm";
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
type iUpdateUsersSchema = z.infer<typeof updateUsersSchemas>;
export type iUpdateUsers = DeepPartial<iUpdateUsersSchema>;
export type iAllUsers = z.infer<typeof allUsersSchemas>;
export type iUsersWithoutPassword = z.infer<typeof usersWithoutPasswordSchemas>;
