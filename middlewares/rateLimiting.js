import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 60, //defaut
  standardHeaders: true,
  legacyHeaders: false,
  message:
    "Too many requests created from this IP, please try again after an hour!",
});

const rateLimiting = () => (req, res, next) => {
  console.log(req.hostname);
  if (process.env.FRONTEND_URL === req.hostname) {
    console.log("Allowed");
    return next();
  } else {
    console.log("Limit");
    return apiLimiter(req, res, next);
  }
};

export default rateLimiting;
