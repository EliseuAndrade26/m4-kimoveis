import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";

const app: Application = express();
app.use(express.json());

app.use(handleErrors);

export default app;
