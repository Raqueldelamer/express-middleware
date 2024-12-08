import rateLimit from 'express-rate-limit'; // import 3rd party middleware

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,  // 1 minute
    limit: 5, // limit each IP to 5 requests per minute
    message: {
        error: 'Reached the limit IP requests. Try again later.' 
    },
});


export default limiter; // default export