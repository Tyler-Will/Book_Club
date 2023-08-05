import Bookshelf from "./Bookshelf";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
const CurrentBook = () => {

    return (
        <div className="CurrentBook">
          <h2>This Month's Subject Is Called...</h2>
          <button>Book Name</button>
            <div className="BookImage"></div>
            <button>Synopsis</button>
            <br></br>
            <button>Data</button>
            {/*
            <p>Page count</p>
            <p>Edition</p>
            <p>DOP</p>
            <p>isbn</p>
            */}
            <br></br>
            <button>Sources</button>
            <p></p>
            <button>Additional Reading</button>
            <p></p>
            <button>Host</button>
            <p></p>
            <button>Discussion Topics</button>
            <p></p>
            <h1>Deadline</h1>
            <p></p>



        </div>
    )
}

export default CurrentBook;