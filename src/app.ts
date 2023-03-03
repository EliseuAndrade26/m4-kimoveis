import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import {
  usersRoutes,
  categoriesRoutes,
  realEstateRoutes,
  schedulesRoutes,
  loginRoutes,
} from "./routers";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);

app.use("/categories", categoriesRoutes);

app.use("/realEstate", realEstateRoutes);

app.use("/schedules", schedulesRoutes);

app.use("/login", loginRoutes);

app.use(handleErrors);

export default app;
