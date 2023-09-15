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

//Add a Book//

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
//Update a Book//

//Delete a Book//

app.listen(5000, () => {
    console.log("Server is now locked and loaded on port 5000");
})