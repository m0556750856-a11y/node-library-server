import { Router } from "express";
import {getByCodeBooks ,postBooks, getBooks, putBooks, patchBorrowBooks, patchReturnBooks,deleteBooks } 
from '../controllers/books.controllers.js'
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
router.patch('/books/:code/return', patchReturnBooks);
//7.3
router.delete('/:code',deleteBooks );

router.get('/books', getByCodeBooks);


export default router;









