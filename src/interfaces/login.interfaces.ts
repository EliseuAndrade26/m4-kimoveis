import { z } from "zod";
import { createLoginSchema } from "../schemas";

export type iLogin = z.infer<typeof createLoginSchema>;
