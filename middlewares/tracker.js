import { CallTracker } from "assert";

const tracker = (req, res, next) => {
    res.cookie('tracker','We are tracking the acesses whitin this application!');
    next();
}

export default tracker;