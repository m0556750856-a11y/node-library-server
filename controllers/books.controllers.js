import books from '../db.js';

export const getByCodeBooks = (req, res) => {
    let filteredBooks = [...books];

    // חיפוש לפי שם (או קריטריון אחר)
    if (req.query.name) {
        filteredBooks = filteredBooks.filter(b => b.name.includes(req.query.name));
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    res.json(paginatedBooks);
}

export const postBooks = (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).send(newBook);
}

export const getBooks = (req, res) => {
    let filteredBooks = [...books];

    // חיפוש לפי שם (או קריטריון אחר)
    if (req.query.name) {
        filteredBooks = filteredBooks.filter(b => b.name.includes(req.query.name));
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
    res.json(paginatedBooks);
}
export const putBooks = (req, res) => {
    const book = books.find(b => b.code === parseInt(req.params.code));
    if (!book) return res.status(404).send('הספר לא נמצא');

    // עדכון השדות (למעט אלו הקשורים להשאלה)
    const { name, category, price } = req.body;
    if (name) book.name = name;
    if (category) book.category = category;
    if (price) book.price = price;

    res.json(book);
}
export const patchBorrowBooks = (req, res) => {
    const book = books.find(b => b.code === parseInt(req.params.code));
    if (!book) return res.status(404).send('הספר לא נמצא');
    if (book.isBorrowed) return res.status(400).send('הספר כבר מושאל'); 

    book.isBorrowed = true;
    book.loans.push({ 
        borrowDate: new Date().toISOString().split('T')[0], 
        customerCode: req.body.customerCode 
    })
}
export const patchReturnBooks = (req, res) => {
    const book = books.find(b => b.code === parseInt(req.params.code));
    if (!book) return res.status(404).send('הספר לא נמצא');
    if (!book.isBorrowed) return res.status(400).send('הספר לא מושאל');

    book.isBorrowed = false;
    book.loans[book.loans.length - 1].returnDate = new Date().toISOString().split('T')[0];

    res.json(book);
}
export const deleteBooks = (req, res) => {
    const index = books.findIndex(b => b.code === parseInt(req.params.code));
    if (index === -1) return res.status(404).send('הספר לא נמצא');
    books = books.filter(p => p.code != req.params.code);
    res.send('success');
}
