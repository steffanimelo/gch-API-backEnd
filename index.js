import "./db/db-index.js";
import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";
import errorHandler from "./middlewares/errorHandler.js";
import characterRouter from "./routes/characterRouter.js";
import tracker from "./middlewares/tracker.js";
import { nextTick } from "process";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const app = express();
const port = process.env.PORT || 5050;
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors({ origin: "*", methods: ["GET"] }));
app.use(cookieParser());


const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 60,  //defaut
  standardHeaders: true, 
  legacyHeaders: false,
  message:
    "Too many requests created from this IP, please try again after an hour!",
});
app.use(apiLimiter);

app.use(express.json());

app.use(tracker);
app.use("/playground", characterRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
