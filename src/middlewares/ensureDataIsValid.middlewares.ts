import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const ensureDataIsValidMiddlewares =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    return next();
  };
