// npm i express   /  npm i -D nodemon  /  npm i -D kill-port  / npm i cookie-parser

import express from "express";
import cookieParser from "cookie-parser";
import playgroundRouter from "./routes/playgroundRouter.js";
// import userTrackingRequests from "./middlewares/userTrackingRequests.js";
import tracker from "./middlewares/tracker.js";

const app = express();    //function that serves as a middleware and returnes:  (req, res, next) => {} 
const port = process.env.PORT || 5050;

app.use(cookieParser());
app.use(express.json());   // middleware that processes the incoming raw json
app.use(tracker);
app.use('/playground', playgroundRouter);
app.get('/', (req, res) => {         //
    console.log(req.cookies);
    res.send('Game Characters API');       
});                                        



app.listen(port,() => console.log(`Server running at http://localhost:${port}`));


