import { Request, Response } from "express";
import { iLogin } from "../interfaces";
import { createLoginService } from "../services/login/login.services";

export default async function createLoginControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const loginData: iLogin = req.body;

  const token = await createLoginService(loginData);

  return res.json({
    token: token,
  });
}
