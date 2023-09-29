import "bootstrap/dist/css/bootstrap.min.css";
import test2 from './Images/test2.jpg';
import './index.css'
//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect, useState} from 'react';
import { Fragment } from "react";
const CurrentBook = ({ShowCurrentBook}) => {

    return (
      <Fragment>
        
         <div class="left">
         <div>
            <p className="Quote">This Month's Quote: "{ShowCurrentBook.quote}."</p>
            <h4>Red Hot News</h4>
            <p>This section isn't ready yet. Be patient!</p>
        </div>
         </div>


        <container className="CurrentBook">
          <h3>This Month's Subject Is...</h3>
          {/*Book and Cover*/}
          <div className ="BookContainer">
  <h1>{ShowCurrentBook.book_title}</h1>
        <img className="CoverImage" src={ShowCurrentBook.book_image} />
        <h2>By {ShowCurrentBook.book_author}</h2>
        {/*Synopsis*/}
        <h3>Synopsis</h3>
        {ShowCurrentBook.book_synopsis}
        
        <h3>Data</h3>
      <li>Page Count: {ShowCurrentBook.page_count}</li>
      <li>Year Published: {ShowCurrentBook.book_year}</li>
      <li>ISBN: {ShowCurrentBook.book_isbn}</li>
      <div className="Wrapping">
        <h3>Purchase or Download Options</h3>
      <li>Download: {ShowCurrentBook.downloading}</li>
      <li>purchase: {ShowCurrentBook.purchasing}</li>
      </div>
        <h3>Additional Reading</h3>
        {ShowCurrentBook.additional_reading}
        <h3>Host</h3>
        Tyler Williams
        <h3>Discussion</h3>
        {ShowCurrentBook.discussion_topic}
        <h3>Deadline</h3>
        {ShowCurrentBook.deadline}
        </div>   
        </container>
        <div class="right">
        <h4>I don't know what to put here...</h4>
    </div>
    
        </Fragment>
        
    );
    
}

export default CurrentBook;