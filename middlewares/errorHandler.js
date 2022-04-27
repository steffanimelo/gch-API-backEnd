const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV !== 'development') {
    console.error(err.stack);  
    }
    res.status(err.statusCode).json({ error: err.message});      
};

export default errorHandler;                            // how can I make a more robust error handler for the client?