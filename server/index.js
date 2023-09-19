const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Sup')
})

//ROUTES//
//Notice how these are basically just sql queries written as functions. The $numbers are just convenient variables.

//Show all Books//
app.get("/books", async(req, res) => {
    try {
        const showBooks = await pool.query("SELECT * FROM books");
        res.json(showBooks.rows)
    } catch (err) {
        console.error(err.message)
    }
});



//Show Current Book//
app.get("/current/:bookStatus", async(req, res) => {
    const { bookStatus }= req.params
    console.log(bookStatus)
    try {
        const currentBook = await pool.query("SELECT * FROM books WHERE book_status = $1", [bookStatus]);
        res.json(currentBook.rows)
    } catch (err) {
        console.error(err.message)
    }
});

//Select a Specific Book
app.get("/books/:book_id", async(req, res) => {
    try {
    const {id}= req.params;
    const book = await pool.query("SELECT * FROM books WHERE book_id = $1", [id])

    res.json(book)
    } catch (err) {
        console.error(err.message)
    }
});


//Add a Book//
app.post("/books", async(req, res) => {
    try {
        const {} = req.body;
        const newBook = await pool.query("INSERT INTO books (book_isbn, book_title, book_author, book_synopsis, page_count, book_year, host_name, additional_reading, discussion_topic, book_status, read_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", 
        [book_isbn, book_title, book_author, book_synopsis, page_count, book_year, host_name, additional_reading, discussion_topic, book_status, read_date]);

        res.json(newBook.rows[0])
    } catch (err) {
        console.error(err.message);
    }
})

//Update a Book//
app.put("/books/:book_id", async (req, res) => {
    try {
        const {book_id} = req.params;
        const {book_isbn, book_title, book_author, book_synopsis, page_count, book_year, host_name, additional_reading, discussion_topic, book_status, read_date} = req.body;
        const updateBook = await pool.query("UPDATE books SET book_isbn = $1, book_title = $2, book_author = $3, book_synopsis = $4, page_count = $5, book_year = $6, host_name = $7, additional_reading = $8, discussion_topic = $9, book_status = $10, read_date = $11 WHERE book_id = $12", [book_isbn, book_title, book_author, book_synopsis, page_count, book_year, host_name, additional_reading, discussion_topic, book_status, read_date, book_id]
        );

        res.json("Book updated!");
    }catch (err) {
        console.error(err.message)
    }
})
//Delete a Book//
app.delete("/books/:book_id", async (req, res) => {
    try {
        const {book_id} = req.params;
        const deleteBook = await pool.query("DELETE FROM books WHERE book_id = $1", [book_id]
        );
        res.json("Bye bye, book...");
    }catch (err) {
        console.error(err.message)
    }
})


/////////////
app.listen(5000, () => {
    console.log("Server is now locked and loaded on port 5000");
})