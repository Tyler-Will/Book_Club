
import AddBook from './AddBook';
import EditBook from './EditBook';
import {Fragment, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';

const Admin =() => {
  const [Showbooks, setBooks] = useState([]);

  ///Delete Book Function
const deleteBook = async (book_id) => 
{try {
  const deleteBook = await fetch(`http://localhost:5000/books/${book_id}`, {
    method: "DELETE"
  });

  setBooks(Showbooks.filter(Showbooks => Showbooks.book_id != book_id));
} catch (err) {
  console.error(err.message)
}
}
  ///

    const getBooks = async () => {
      try {
      const response = await fetch("http://localhost:5000/books");
      const json = await response.json();

      setBooks(json);
    } catch (err) {
      console.error(err.message)
    }
    };
    useEffect(() => {
      getBooks();
    }, []);

    
return (
  <Fragment>
    <h2>Welcome to the Administrator's Records</h2>
    <AddBook />
    {" "}
    
  <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          
          <th>book_isbn</th>
          <th>book_title</th>
          <th>book_author</th>
          <th>book_synopsis</th>
          <th>page_count</th>
          <th>book_year</th>
          <th>host_name</th>
          <th>additional_reading</th>
          <th>discussion_topic</th>
          <th>book_status</th>
          <th>read_date</th>
          <th>Save Changes To This Book?</th>
          <th>DELETE THIS BOOK?</th>
        </tr>
      </thead>
      <tbody>
        {Showbooks.map(Showbooks=>
        <tr key={Showbooks.book_id}>
          <td>
            <td>
              
            </td>
            <input maxLength={40} type="text" id="BookISBN" 
          defaultValue={Showbooks.book_isbn}>
            </input>
            </td>
             <td>
            <input required maxLength={100} type="text" id="BookTitle" 
            defaultValue={Showbooks.book_title}>
            </input>
            </td>
          <td><input required maxLength={100} type="text" id="BookAuthor"
           defaultValue={Showbooks.book_author}>
            </input>
            </td>
          <td><input required maxLength={1000} type="text" id="BookSynopsis" 
          defaultValue={Showbooks.book_synopsis}>
            </input>
            </td>
          <td><input required maxLength={10} type="number" id="BookPageCount" 
          defaultValue={Showbooks.page_count}>
            </input>
            </td>
          <td><input maxLength={6} type="text" id="BookYear" 
          defaultValue={Showbooks.book_year}>
            </input>
            </td>
          <td><input required maxLength={40} type="text" id="HostName" 
          defaultValue={Showbooks.host_name}>
            </input>
            </td>
          <td><input maxLength={1000} type="text" id="AdditionalReading" 
          defaultValue={Showbooks.additional_reading}>
            </input>
            </td>
          <td><input maxLength={1000} type="text" id="DiscussionTopic" 
          defaultValue={Showbooks.discussion_topic}>
            </input>
            </td>
          <td><input required maxLength={1000} type="text" id="BookStatus" 
          defaultValue={Showbooks.book_status}>
            </input>
            </td>
          <td><input type="text" id="ReadDate" 
          defaultValue={Showbooks.read_date}>
            </input>
            </td>
            <td><button><EditBook /></button></td>
          <td><button className='btn btn-danger' onClick={() => deleteBook(Showbooks.book_id)}>Delete</button></td>
        </tr>
       )}
      </tbody>
    </Table>
    </Fragment>
)
   }
  
export default Admin