import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
//useEffect is needed to prevent fetch request from running more than once. See below.
import { Fragment } from "react";
const CurrentBook = ({ShowCurrentBook}) => {

    return (
      <Fragment>
        
         <div class="left">
         <div class="LeftContent">
            <p className="Quote">This Month's Quote: "{ShowCurrentBook.quote}"</p>
            <div className="News">
            <h4>Red Hot News</h4>
            <p>This section isn't ready yet. Be patient!</p>
            </div>
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
        {ShowCurrentBook.host_name}
        <h3>Discussion</h3>
        {ShowCurrentBook.discussion_topic}
        <h3>Deadline</h3>
        {ShowCurrentBook.deadline}
        </div>   
        </container>
        <div class="right">
          <div class="RightContent">
        <h4>You new here? Please, refer to the following</h4>
        <ul>
          <li>FAQ</li>
          <li>About Us</li>
          <li>Business Inquiries</li>
          <li>Some More Stuff</li>
        </ul>
        </div>
    </div>
    
        </Fragment>
        
    );
    
}

export default CurrentBook;