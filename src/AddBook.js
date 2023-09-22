import React, { Fragment, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';

const AddBook = () => {
    //These variables should match the ones in your routes if possible.
    const [book_isbn, setISBN] = useState("")
    const [book_title, setTitle] = useState("")
    const [book_author, setAuthor] = useState("")
    const [book_synopsis, setSynopsis] = useState("")
    const [page_count, setPages] = useState("")
    const [book_year, setYear] = useState("")
    const [host_name, setHost] = useState("")
    const [additional_reading, setAdd] = useState("")
    const [discussion_topic, setDiscussion] = useState("")
    const [book_status, setStatus] = useState("")
    const [read_date, setDate] = useState("")
    const [book_image, setImage] = useState("")
    const [purchasing, setPurchase] = useState("")
    const [deadline, setDeadline] = useState("")
    const [quote, setQuote] = useState("")
    const [marquee, setMarquee] = useState("")
    const [downloading, setDownloading] = useState("")
    
    const [open, setOpen] = useState(false);

    const onsubmitForm = async e => {
        e.preventDefault();
        try {
            const body ={book_isbn, book_title, book_author, book_synopsis, page_count, book_year, host_name, additional_reading, discussion_topic, book_status, read_date, book_image, purchasing, deadline, quote, marquee, downloading };
            const response = await fetch("http://localhost:5000/books/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/Admin";
        } catch (err) {
        console.error(err.message)  
        }

    }

    return (
        <Fragment>

<>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <h4>Would you Like to Add a New Book?</h4>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <Form onSubmit={onsubmitForm}>
          <h4>Book Data</h4>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>book_isbn</Form.Label>
        <Form.Control maxLength={40} type="text" placeholder="Max 40 characters" value={book_isbn} onChange={e => setISBN(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label >book_title</Form.Label>
        <Form.Control required maxLength={100} type="text" placeholder="Max 100 characters" value={book_title} onChange={e => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label >book_author</Form.Label>
        <Form.Control required maxLength={100} type="text" placeholder="Max 100 characters" value={book_author} onChange={e => setAuthor(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="textarea">
      <Form.Label>book_synopsis</Form.Label>
      <br></br>
      <textarea required maxLength={1000} value={book_synopsis} onChange={e => setSynopsis(e.target.value)} rows="4" cols="50"></textarea>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>page_count</Form.Label>
        <Form.Control required maxLength={10} type="text" placeholder="Max 10 characters" value={page_count} onChange={e => setPages(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>book_year</Form.Label>
        <Form.Control maxLength={6} type="text" placeholder="Max 6 characters" value={book_year} onChange={e => setYear(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>host_name</Form.Label>
        <Form.Control required maxLength={40} type="text" placeholder="Max 40 characters" value={host_name} onChange={e => setHost(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>additional_reading</Form.Label>
      <br></br>
      <textarea maxLength={1000} value={additional_reading} onChange={e => setAdd(e.target.value)}rows="4" cols="50"></textarea>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>discussion_topic</Form.Label>
        <Form.Control maxLength={1000} type="text" placeholder="Max 1000 characters" value={discussion_topic} onChange={e => setDiscussion(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>book_status</Form.Label>
      <br></br>
      <select required value={book_status} onChange={e => setStatus(e.target.value)} id="book_status">
            <option></option>
            <option value="Reading">Reading</option>
            <option value="Finished">Finished</option>
        </select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>read_date</Form.Label>
        <Form.Control type="text" placeholder="Format: 00/00" value={read_date} onChange={e => setDate(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>Purchase Link</Form.Label>
        <Form.Control type="text" placeholder="Amazon, Target, etc." value={purchasing} onChange={e => setPurchase(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>Download or Webpage Link</Form.Label>
        <Form.Control type="text" placeholder="Public Domain Books are usually available for free" value={downloading} onChange={e => setDownloading(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>Image Link</Form.Label>
        <Form.Control type="text" placeholder="Preferably the book's cover" value={book_image} onChange={e => setImage(e.target.value)}/>
      </Form.Group>
      
      <h4>Miscellaneous Data</h4>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>Deadline</Form.Label>
        <Form.Control type="text" placeholder="Amazon, Target, etc." value={deadline} onChange={e => setDeadline(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>Favorite Quote From the Book</Form.Label>
        <Form.Control type="text" placeholder="Something something..." value={quote} onChange={e => setQuote(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
      <Form.Label>Marquee</Form.Label>
        <Form.Control type="text" placeholder="Preferably the book's cover" value={marquee} onChange={e => setMarquee(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
      </Collapse>
    </>

        </Fragment>
    )
}

export default AddBook