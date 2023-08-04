const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//Add a Book//

//Show all Books//

//Show a Book//

//Update a Book//

//Delete a Book//

app.listen(5000, () => {
    console.log("Server is now locked and loaded on port 5000");
})