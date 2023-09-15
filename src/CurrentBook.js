import Bookshelf from "./Bookshelf";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import test2 from './Images/test2.jpg';

//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect, useState} from 'react';

const CurrentBook = ({ShowCurrentBook}) => {

    return (
        <div className="CurrentBook">
          <h2>This Month's Book Is...</h2>
          {/*Book and Cover*/}
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Click Here To See
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="BookTitle"><h2>{ShowCurrentBook.book_title}</h2></Dropdown.Item>
        <Dropdown.Item><img src={test2} /></Dropdown.Item>
        <Dropdown.Item><h2>By {ShowCurrentBook.book_author}</h2></Dropdown.Item>
        {/*Synopsis*/}
        <h3>Synopsis</h3>
        <Dropdown.Item>{ShowCurrentBook.book_synopsis}</Dropdown.Item>
        <h3>Data</h3>
        <ListGroup>
      <ListGroup.Item>Page Count: {ShowCurrentBook.page_count}</ListGroup.Item>
      <ListGroup.Item>Year Published: {ShowCurrentBook.book_year}</ListGroup.Item>
      <ListGroup.Item>ISBN: {ShowCurrentBook.book_isbn}</ListGroup.Item>
    </ListGroup>
        <h3>Purchase or Download Options</h3>
        <ListGroup>
      <ListGroup.Item>Download: https://github.com/Tyler-Will/Book_Club/tree/Backend</ListGroup.Item>
      <ListGroup.Item>Storefront: https://github.com/Tyler-Will/Book_Club/tree/Backend</ListGroup.Item>
    </ListGroup>
        <h3>Additional Reading</h3>
        {ShowCurrentBook.additional_reading}
        <h3>Host</h3>
        Tyler Williams
        <h3>Discussion</h3>
        {ShowCurrentBook.discussion_topic}
        <h3>Deadline</h3>
        ??/??/????
      </Dropdown.Menu>
    </Dropdown>
            
            
        </div>
    )
}

export default CurrentBook;