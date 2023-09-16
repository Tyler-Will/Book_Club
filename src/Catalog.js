import Table from 'react-bootstrap/Table';


function Catalog({Showbooks}) {
    
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
          <th>Save Changes?</th>
          <th>DELETE BOOK?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Showbooks.book_id}</td>
          <td><input type="text" id="BookName" value={Showbooks.book_isbn} ></input></td>
          <td><input type="text" id="BookName" value={Showbooks.book_title}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.book_author} ></input></td>
          <td><input type="text" id="BookName" value={Showbooks.book_synopsis}></input></td>
          <td><input type="number" id="BookName" value={Showbooks.page_count}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.book_year}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.host_name}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.additional_reading}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.discussion_topic}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.book_status}></input></td>
          <td><input type="text" id="BookName" value={Showbooks.read_date}></input></td>
          <td><button>Yes</button></td>
          <td><button>Yes</button></td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default Catalog;