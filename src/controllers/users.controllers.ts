import { Request, Response } from "express";
import { iCreateUsers } from "../interfaces";
import {
  iAllUsers,
  iUsersWithoutPassword,
} from "../interfaces/users.interfaces";
import {
  createUsersServices,
  retrieveUsersListServices,
} from "../services/users";

export async function createUsersControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const userData: iCreateUsers = req.body;

  const newUser: iUsersWithoutPassword = await createUsersServices(userData);

  return res.status(201).json(newUser);
}

export async function retrieveUsersListControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const usersList: iAllUsers = await retrieveUsersListServices();

  return res.json(usersList);
}
