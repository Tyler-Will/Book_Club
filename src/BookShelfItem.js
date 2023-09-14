import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';
import test2 from './Images/test2.jpg';
const BookName= "Goin' Crazy"
const BookShelfItem = () => {
    
    return(
        <ul>
            <li>
                {/*Book 1*/}
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {BookName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="BookTitle">
            {BookName}
            </Dropdown.Item>
        <Dropdown.Item><img src={test2} /></Dropdown.Item>
        <Dropdown.Item>By Isamu Nitta</Dropdown.Item>
        {/*Synopsis*/}
        <h3>Synopsis</h3>
        <Dropdown.Item>AAAAAA</Dropdown.Item>
        <h3>Data</h3>
        <ListGroup>
      <ListGroup.Item>Page Count:</ListGroup.Item>
      <ListGroup.Item>Edition:</ListGroup.Item>
      <ListGroup.Item>Year Published:</ListGroup.Item>
      <ListGroup.Item>ISBN:</ListGroup.Item>
    </ListGroup>
        <h3>Purchase or Download Options</h3>
        <ListGroup>
      <ListGroup.Item>Download:</ListGroup.Item>
      <ListGroup.Item>Storefront:</ListGroup.Item>
    </ListGroup>
        <h3>Additional Reading</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum libero incidunt ducimus molestias nisi, natus aperiam consequuntur eum rem quia iusto dolore veniam totam aspernatur possimus? Explicabo, repellendus eum? Nostrum?
        <h3>Host</h3>
        Tyler Williams
        <h3>Discussion</h3>
        What do you believe Isamu's eyes imploding on page 355 was meant to represent?
        <h3>Deadline</h3>
        ??/??/????
      </Dropdown.Menu>
    </Dropdown>
            </li>

        </ul>
    )
    }

    export default BookShelfItem; 