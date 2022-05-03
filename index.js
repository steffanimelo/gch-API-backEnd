import "./db/db-index.js";
import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";
import errorHandler from "./middlewares/errorHandler.js";
import playgroundRouter from "./routes/characterRouter.js";
import tracker from "./middlewares/tracker.js";
import { nextTick } from "process";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5050;

app.use(cookieParser());
/*---------------  CORS ---------------------*/
app.use(cors({ origin: "*", methods: ["GET"] }));

/*---------------  CORS ---------------------*/
app.use(express.json());

app.use(tracker);
app.use("/playground", playgroundRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
