import { Router } from "express";
import {getByCodeBooks ,postBooks, getBooks, putBooks, patchBorrowBooks, patchReturnBooks,deleteBooks } 
from '../controllers/books.controllers.js'
import validateSchema from'../middleware/validateSchema.js'; // הייבוא של הפונקציה
import bookSchema from'../middleware/schema.js'; // ה-Schema שהגדרנו קודם

const router = Router();


//2.3
router.get('/:code', validateSchema(bookSchema),getBooks );

//3.3
router.post('/', validateSchema(bookSchema), postBooks);

//4.3
router.put('/:code', validateSchema(bookSchema), putBooks);

//5.3
router.patch('/:code/borrow', validateSchema(bookSchema), patchBorrowBooks);


//6.3
router.patch('/books/:code/return', validateSchema(bookSchema), patchReturnBooks);
//7.3
router.delete('/:code', validateSchema(bookSchema),    deleteBooks );

router.get('/books', validateSchema(bookSchema), getByCodeBooks);


export default router;









