// npm i express   /  npm i -D nodemon  /  npm i -D kill-port  / npm i cookie-parser

import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";
import errorHandler from "./middlewares/errorHandler.js"
import playgroundRouter from "./routes/playgroundRouter.js";
// import userTrackingRequests from "./middlewares/userTrackingRequests.js";
import tracker from "./middlewares/tracker.js";
import { nextTick } from "process";

const app = express();    //function that serves as a middleware and returnes:  (req, res, next) => {} 
const port = process.env.PORT || 5050;

app.use(cookieParser());
app.use(express.json());   // middleware that processes the incoming raw json
app.use(tracker);
app.use('/playground', playgroundRouter);
app.get('/', (req, res, next) => {         
    console.log(req.cookies);
    fs.readFile('/file-does-not-exist', (err, data) => { // when we have asyncronous code, call-backs or promisses in express, we need to call next
        if(err) {
            next(err);
        } else {
            res.send(data);
        }
    });
      
});                                        

app.use(errorHandler);    // the order matters here; it has to be at the end

app.listen(port,() => console.log(`Server running at http://localhost:${port}`));


