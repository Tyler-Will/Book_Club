import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import BookShelfItem from './BookShelfItem';
//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect, useState} from 'react';

const Bookshelf = (props) => {
    //const bookStatus = 'Reading'
  const [ Showbooks, setShowBooks] =useState(null)

  const getAllBooks = async () => {
    
    try {
      const response = await fetch(`http://localhost:5000/books`)
      const json = await response.json()
      //console.log(json)
      setShowBooks(json)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => getAllBooks, [])

  console.log(Showbooks)

  //Sort by Date
  const SortedBooks = Showbooks?.sort((a,b) => new Date(a.read_date) - new Date(b.read_date))
    
    return(
        <div className="Bookshelf">
          <h2 className="Title">Previously Read Books</h2>
        {SortedBooks?.map((Showbooks) => <BookShelfItem key={Showbooks.book_id} Showbooks={Showbooks}/>)}
        </div>
    )
    }

    export default Bookshelf; 