import "dotenv/config";
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./routes";
import { delay } from "./middlewares";

const app = express();

app.use(cors());
app.use(json());
app.use(morgan("tiny"));
app.use(delay);
app.use(routes);

app.listen(process.env.PORT, () => console.log("SERVER is running on port:", process.env.PORT));

mongoose
  .connect(process.env.MONGO_URL || "", { dbName: "mock" })
  .then(() => console.log("CONNECTION TO DB IS INSTALLED"))
  .catch((error) => console.log("CAN NOT CONNECT TO DATABASE", error));
