import { Request, Response } from "express";
import {
  iAllRealEstate,
  iCreateRealEstate,
  iReturnRealEstateSchemas,
} from "../interfaces";
import {
  createRealEstateServices,
  retrieveRealEstateListServices,
} from "../services/realEstate";

export async function createRealEstateControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const requestData: iCreateRealEstate = req.body;

  const newRealEstate: iReturnRealEstateSchemas =
    await createRealEstateServices(requestData);

  return res.status(201).json(newRealEstate);
}

export async function retrieveRealEstateListControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const allRealEstate: iAllRealEstate = await retrieveRealEstateListServices();

  return res.json(allRealEstate);
}
