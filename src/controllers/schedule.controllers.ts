import { Request, Response } from "express";
import { iAllSchedules, iCreateSchedules, iSchedules } from "../interfaces";
import {
  createScheduleServices,
  retrieveSchedulesListServices,
} from "../services/schedules";

export async function createScheduleControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const requestData: iCreateSchedules = req.body;

  const idUser: number = req.user.id;

  const newSchedule: iSchedules = await createScheduleServices(
    requestData,
    idUser
  );

  return res.status(201).json(newSchedule);
}

export async function retrieveSchedulesListControllers(
  req: Request,
  res: Response
): Promise<Response> {
  const idSchedules: number = Number(req.params.id);

  const schedulesList: iAllSchedules = await retrieveSchedulesListServices(
    idSchedules
  );

  return res.json(schedulesList);
}
