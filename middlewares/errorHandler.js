const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV !== 'development') {
    console.log(err.name);
    console.log(err.message);   
    }
    if(err.name === 'CastError'){
        return res.status(400).json({error:'What you passed is an invalid objectId!'});
    }
    res.status(err.statusCode || 500).json({ error: err.message});      
};

export default errorHandler;                            // how can I make a more robust error handler for the client?