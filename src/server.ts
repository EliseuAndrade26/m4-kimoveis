import app from "./app";
import "dotenv/config";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT, () => {
      console.log("Server is running!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
