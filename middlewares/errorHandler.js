const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message});      // how can I trow this error in DEV mode only? will be wise to do so?
};

export default errorHandler;