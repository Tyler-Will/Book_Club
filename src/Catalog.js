import Table from 'react-bootstrap/Table';


function Catalog({Showbooks}) {
    
    const handleChange = () => {
        console.log('changing!')
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
          <th>Save Changes?</th>
          <th>DELETE BOOK?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Showbooks.book_id}</td>
          <td>
            <input maxLength={40} type="text" id="BookName" 
          defaultValue={Showbooks.book_isbn} onChange={handleChange}>
            </input>
            </td>
             <td>
            <input required maxLength={100} type="text" id="BookName" 
            defaultValue={Showbooks.book_title} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={100} type="text" id="BookName"
           defaultValue={Showbooks.book_author} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={1000} type="text" id="BookName" 
          defaultValue={Showbooks.book_synopsis} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={10} type="number" id="BookName" 
          defaultValue={Showbooks.page_count} onChange={handleChange}>
            </input>
            </td>
          <td><input maxLength={6} type="text" id="BookName" 
          defaultValue={Showbooks.book_year}>
            </input>
            </td>
          <td><input required maxLength={40} type="text" id="BookName" 
          defaultValue={Showbooks.host_name} onChange={handleChange}>
            </input>
            </td>
          <td><input maxLength={1000} type="text" id="BookName" 
          defaultValue={Showbooks.additional_reading} onChange={handleChange}>
            </input>
            </td>
          <td><input maxLength={1000} type="text" id="BookName" 
          defaultValue={Showbooks.discussion_topic} onChange={handleChange}>
            </input>
            </td>
          <td><input required maxLength={1000} type="text" id="BookName" 
          defaultValue={Showbooks.book_status} onChange={handleChange}>
            </input>
            </td>
          <td><input type="text" id="BookName" 
          defaultValue={Showbooks.read_date} onChange={handleChange}>
            </input>
            </td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
        </tr>
       
      </tbody>
    </Table>
  );
}

export default Catalog;