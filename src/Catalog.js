import Table from 'react-bootstrap/Table';
import { useState } from 'react';


function Catalog({Showbooks}) {
    const [data, setData] = useState({
        book_isbn: "",
        book_title: "",
        book_author: "",
        book_synopsis: "",
        page_count: "",
        book_year: "",
        host_name: "",
        additional_reading: "",
        discussion_topic: "",
        book_status: "",
        read_date: ""

    })
    
    const handleChange = (e) => {
        //console.log('changing!', e)
        const {name, value} = e.target

        setData(data => ({
        ...data,
        [name] : value

    
    }))

    console.log(data)

    }
    
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>book_id</th>
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
        <tr>
          <td>
            <input maxLength={40} type="text" id="BookISBN" 
          defaultValue={Showbooks.book_isbn} value={data.isbn} onChange={handleChange}>
            </input>
            </td>
             <td>
            <input required maxLength={100} type="text" id="BookTitle" 
            defaultValue={Showbooks.book_title} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={100} type="text" id="BookAuthor"
           defaultValue={Showbooks.book_author} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={1000} type="text" id="BookSynopsis" 
          defaultValue={Showbooks.book_synopsis} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={10} type="number" id="BookPageCount" 
          defaultValue={Showbooks.page_count} onChange={handleChange}>
            </input>
            </td>
          <td><input maxLength={6} type="text" id="BookYear" 
          defaultValue={Showbooks.book_year}>
            </input>
            </td>
          <td><input required maxLength={40} type="text" id="HostName" 
          defaultValue={Showbooks.host_name} onChange={handleChange}>
            </input>
            </td>
          <td><input maxLength={1000} type="text" id="AdditionalReading" 
          defaultValue={Showbooks.additional_reading} onChange={handleChange}>
            </input>
            </td>
          <td><input maxLength={1000} type="text" id="DiscussionTopic" 
          defaultValue={Showbooks.discussion_topic} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={1000} type="text" id="BookStatus" 
          defaultValue={Showbooks.book_status} onChange={handleChange}>
            </input>
            </td>
          <td><input type="text" id="ReadDate" 
          defaultValue={Showbooks.read_date} onChange={handleChange}>
            </input>
            </td>
            <td><button>Save</button></td>
          <td><button >Delete</button></td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default Catalog;