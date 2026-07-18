import express, { Router } from 'express'
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import books from './db.js';
import booksRouter from './routes/books.routes.js'
import userRoutes from './routes/user.routes.js'
import { addCurrentDate, printCurrentDate } from './middlewares/dateMiddleware.js';
import { errorHandler } from './middleware/error.js';



const app = express();

app.use(cors());
//הגנת אבטחה סטנדרטית
app.use(helmet());
// רישום בקשות HTTP
app.use(morgan('dev'));
// הגבלת בקשות כדי למנוע התקפות 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // מקסימום 100 בקשות לכל כתובת IP בכל חלון זמן
});
// רישום הגבלת בקשות
app.use(limiter); 

app.use(express.json());

app.use(errorHandler);

 app.use('books' , booksRouter);

app.use('/users', userRoutes);

app.use(addCurrentDate);

app.use(printCurrentDate);

app.use(errorHandler);
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})