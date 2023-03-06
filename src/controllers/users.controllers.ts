import { Request, Response } from "express";
import { iCreateUsers } from "../interfaces";
import {
  iAllUsers,
  iUpdateUsers,
  iUsersWithoutPassword,
} from "../interfaces/users.interfaces";
import {
  createUsersServices,
  deleteUsersServices,
  retrieveUsersListServices,
  updateUsersServices,
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

export async function updateUsersControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const newUserData: iUpdateUsers = req.body;

  const idUser: number = Number(req.params.id);

  const userData: iUpdateUsers = await updateUsersServices(newUserData, idUser);

  return res.json(userData);
}

export async function deleteUsersControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const idUser: number = Number(req.params.id);

  await deleteUsersServices(idUser);

  return res.status(204).send();
}
