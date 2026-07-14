import express from 'express'
import books from './db.js';

const app = express()
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World')
})
//1.3
app.get('/books', (req, res) => {
  res.send(books);
});
//2.3
app.get('/books/:code', (req, res) => {
    const bookId = parseInt(req.params.code);
    const book = books.find(b => b.code === bookId);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.send(book);
});
//3.3
app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).send(newBook);
});
//4.3
app.delete('/books/:code', (req, res) => {
    const index = books.findIndex(b => b.code === parseInt(req.params.code));
    if (index === -1) return res.status(404).send('הספר לא נמצא');
    books = books.filter(p => p.code != req.params.code);
    res.send('success');});







app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000')
})