import "./db/db-index.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import tracker from "./middlewares/tracker.js";
import characterRouter from "./routes/characterRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import rateLimiting from "./middlewares/rateLimiting.js";

const app = express();
const port = process.env.PORT || 5050;
if (process.env.NODE_ENV !== "production") {
  const morgan = await import("morgan");
  app.use(morgan.default("dev"));
}
app.use(cors({ origin: "*", methods: ["GET"] }));
app.use(cookieParser());
app.set("trust proxy", true);
app.use(rateLimiting());


app.use(express.json());

app.use(tracker);
app.use("/playground", characterRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
