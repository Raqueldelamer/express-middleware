import express from 'express'
// import { rateLimit } from 'express-rate-limit';
import { dateLogger } from './middleware/dateLogger.js';
import { daysToNewYear } from './middleware/daysToNewYear.js';
import limiter from './middleware/rateLimit.js';


const app = express();

//middleware for json post body
app.use(express.json());
app.use(dateLogger);
app.use(daysToNewYear);
app.use(limiter);

// root URL
app.get('/', (req, res) => {
    res.send("Hello, Monde! Welcome to Middleware!")
    
})



app.listen(3003, () => {
    console.log("Express app listening on port 3003, 3000 is in use.")  
})