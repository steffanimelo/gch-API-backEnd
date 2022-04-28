
import "./db/db-index.js";
import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";
import errorHandler from "./middlewares/errorHandler.js"
import playgroundRouter from "./routes/characterRouter.js";
import tracker from "./middlewares/tracker.js";
import { nextTick } from "process";

const app = express();     //function that serves as a middleware and returnes:  (req, res, next) => {} 
const port = process.env.PORT || 5050;

app.use(cookieParser());
app.use(express.json());   // middleware that processes the incoming raw json
app.use(tracker);
app.use('/playground', playgroundRouter);

app.use(errorHandler);    // the order matters here; it has to be at the end

app.listen(port,() => console.log(`Server running at http://localhost:${port}`));


