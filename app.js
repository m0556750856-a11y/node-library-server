import express, { Router } from 'express'

import books from './db.js';

import booksRouter from './routes/books.routes.js'
import userRoutes from './routes/user.routes.js'
const app = express()

app.use(express.json());

 app.use('books' , booksRouter);


app.use('/users', userRoutes);




app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})