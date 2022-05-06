import "./db/db-index.js";
import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";
import errorHandler from "./middlewares/errorHandler.js";
import characterRouter from "./routes/characterRouter.js";
import tracker from "./middlewares/tracker.js";
import { nextTick } from "process";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
const port = process.env.PORT || 5050;
if (process.env.NODE_ENV !== "production") {
  const morgan = await import("morgan");
  app.use(morgan.default("dev"));
}
app.use(cors({ origin: "*", methods: ["GET"] }));
app.use(cookieParser());

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 1000, //defaut
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
