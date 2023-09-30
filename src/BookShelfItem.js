import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import './index.css';

const BookShelfItem = ({Showbooks}) => {
    
    return(
      <div>
        <ul>
            <li>
                {/*Book 1*/}
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {Showbooks.book_title} on  {Showbooks.read_date}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="BookTitle">
            {Showbooks.book_title}
            </Dropdown.Item>
        {/*<Dropdown.Item><img src={Showbooks.book_image} /></Dropdown.Item>*/}
        <Dropdown.Item>Author: {Showbooks.book_author}</Dropdown.Item>
        {/*Synopsis*/}
        <h3>Synopsis</h3>
        <Dropdown.Item>{Showbooks.book_synopsis}</Dropdown.Item>
        <h3>Host</h3>
        {Showbooks.host_name}
      </Dropdown.Menu>
    </Dropdown>
            </li>

        </ul>
        </div>
    )
    }

    export default BookShelfItem; 