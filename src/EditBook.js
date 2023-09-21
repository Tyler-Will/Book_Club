import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//Modal Function
const EditBook = ({Showbooks}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//

     ///For EditBook
  console.log(Showbooks);
  const [book_isbn, setISBN] = useState(Showbooks.book_isbn)
  const [book_title, setTitle] = useState(Showbooks.book_title)
  const [book_author, setAuthor] = useState(Showbooks.book_author)
  const [book_synopsis, setSynopsis] = useState(Showbooks.book_synopsis)
  const [page_count, setPages] = useState(Showbooks.page_count)
  const [book_year, setYear] = useState(Showbooks.book_year)
  const [host_name, setHost] = useState(Showbooks.host_name)
  const [additional_reading, setAdd] = useState(Showbooks.additional_reading)
  const [discussion_topic, setDiscussion] = useState(Showbooks.discussion_topic)
  const [book_status, setStatus] = useState(Showbooks.book_status)
  const [read_date, setDate] = useState(Showbooks.read_date)
  //

  ///Edit Book Function
  const SubmitChanges = async e => {
    e.preventDefault();
    try {
        const body ={book_isbn, book_title, book_author, book_synopsis, page_count, book_year, host_name, additional_reading, discussion_topic, book_status, read_date};
        const response = await fetch(`http://localhost:5000/books/${Showbooks.book_id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        window.location = "/Admin";
    } catch (err) {
    console.error(err.message)  
    }
  }

/**/

    return (

<>
<Button variant="primary" onClick={handleShow}>
  Edit
</Button>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>What Changes Would You Like To Make?</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
          <label>book_isbn</label>
          <input type="text" className="form-control" value={book_isbn} onChange={e => setISBN(e.target.value)}/>

          <label>book_title</label>
          <input type="text" className="form-control" value={book_title} onChange={e => setTitle(e.target.value)}/>

          <label>book_author</label>
          <input type="text" className="form-control" value={book_author} onChange={e => setAuthor(e.target.value)}/>

          <label>book_synopsis</label>
          <textarea type="text" className="form-control" value={book_synopsis} onChange={e => setSynopsis(e.target.value)}/>

          <label>page_count</label>
          <input type="text" className="form-control" value={page_count} onChange={e => setPages(e.target.value)}/>

          <label>book_year</label>
          <input type="text" className="form-control" value={book_year} onChange={e => setYear(e.target.value)}/>

          <label>host_name</label>
          <input type="text" className="form-control" value={host_name}  onChange={e => setHost(e.target.value)}/>

          <label>additional_reading</label>
          <textarea type="text" className="form-control" value={additional_reading}  onChange={e => setAdd(e.target.value)}/>

          <label>discussion_topic</label>
          <textarea type="text" className="form-control" value={discussion_topic}  onChange={e => setDiscussion(e.target.value)}/>

          <label>book_status</label>
          <br></br>
          <select value={book_status}  onChange={e => setStatus(e.target.value)}>
            <option></option>
            <option value="Reading">Reading</option>
            <option value="Finished">Finished</option>
        </select>
            <br></br>
          <label>read_date</label>
          <input type="text" className="form-control" value={read_date}  onChange={e => setDate(e.target.value)}/>

  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Nevermind
    </Button>
    <Button variant="primary" onClick={e=> SubmitChanges(e)}>
      Submit Changes
    </Button>
  </Modal.Footer>
</Modal>
</>
    )
    
   }


export default EditBook;
