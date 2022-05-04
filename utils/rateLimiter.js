function rateLimiter(config) {
  return function (req, res, next) {
    console.log(req.connection.remoteAddress);
    next();
  };
}

export default rateLimiter;
