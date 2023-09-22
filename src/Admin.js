import AddBook from './AddBook';
import EditBook from './EditBook';
import {Fragment, useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';

const Admin =() => {
  const [Showbooks, setBooks] = useState([]);
  //Temporary
  //const book_id= 'hello';
  //

 

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
          <th>book_image</th> <th>purchasing</th> 
          <th>deadline</th> 
          <th>quote</th>
          <th>marquee</th>
          <th>downloading</th>  
          <th>Make Changes To This Book?</th>
          <th>DELETE THIS BOOK?</th>
        </tr>
      </thead>
      <tbody>
        {Showbooks.map(Showbooks=>
        <tr key={Showbooks.book_id}>
          <td>
            
            <p>{Showbooks.book_isbn}</p>
            
            </td>
             <td>
            <p>{Showbooks.book_title}</p>
            </td>
          <td>
            <p>{Showbooks.book_author}</p>
            </td>
          <td>
            <p>{Showbooks.book_synopsis}
            </p>
            </td>
          <td>
           <p>{Showbooks.page_count}</p>
            </td>
          <td><p>{Showbooks.book_year}
            </p>
            </td>
          <td>
            <p>{Showbooks.host_name}
            </p>
            </td>
          <td class>
            <p class="text-truncate">{Showbooks.additional_reading}
            </p>
            </td>
          <td><p>
            {Showbooks.discussion_topic}
            </p>
            </td>
          <td><p>{Showbooks.book_status}
            </p>
            </td>
          <td><p>{Showbooks.read_date}
            </p>
            </td>
            <td>
            <p>{Showbooks.book_image}
            </p>
            </td>
          <td class>
            <p class="text-truncate">{Showbooks.purchasing}
            </p>
            </td>
          <td><p>
            {Showbooks.deadline}
            </p>
            </td>
            <td>
            <p>{Showbooks.quote}
            </p>
            </td>
          <td class>
            <p class="text-truncate">{Showbooks.marquee}
            </p>
            </td>
          <td><p class="text-truncate">
            {Showbooks.downloading}
            </p>
            </td>
            <td><EditBook Showbooks={Showbooks}/></td>
          <td><button className='btn btn-danger' onClick={() => deleteBook(Showbooks.book_id)}>Delete</button></td>
        </tr>
       )}
      </tbody>
    </Table>
    </Fragment>
)
   }
  
export default Admin