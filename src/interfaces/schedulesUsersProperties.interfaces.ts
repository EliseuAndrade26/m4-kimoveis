import { z } from "zod";
import {
  allSchedulesSchemas,
  newRequestSchedulesSchemas,
  requestSchedulesSchemas,
  schedulesSchemas,
  updateSchedulesSchemas,
} from "../schemas";

export type iCreateSchedules = z.infer<typeof requestSchedulesSchemas>;
export type iNewCreateSchedules = z.infer<typeof newRequestSchedulesSchemas>;
export type iSchedules = z.infer<typeof schedulesSchemas>;
export type iPudateSchedules = z.infer<typeof updateSchedulesSchemas>;
export type iAllSchedules = z.infer<typeof allSchedulesSchemas>;
