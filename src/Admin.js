
//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect, useState} from 'react';
import Catalog from './Catalog';
//The Admin Function is just a modified Bookshelf Function
const Admin =(props) => {

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
        <div>
          <h2>Previously Read Books</h2>
        {SortedBooks?.map((Showbooks) => <Catalog key={Showbooks.book_id} Showbooks={Showbooks}/>)}
        </div>
    )
    }

export default Admin