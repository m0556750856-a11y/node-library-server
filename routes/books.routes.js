import { Router } from "express";
import {getByCodeBooks ,postBooks, getBooks, putBooks, patchBorrowBooks, patchReturnBooks,deleteBooks } from '../controllers/books.controllers'
const router = Router();



//2.3
router.get('/:code',getBooks );

//3.3
router.post('/', postBooks);

//4.3
router.put('/:code',putBooks );

//5.3
router.patch('/:code/borrow',patchBorrowBooks );


//6.3
app.patch('/books/:code/return', patchReturnBooks);
//7.3
app.delete('/:code',deleteBooks );

app.get('/books', getByCodeBooks);


export default router;









