import { Fragment } from "react";
import CurrentBook from "./CurrentBook";
import Marquee from "./Mainstay Components/MarqueeMessage";
import './index.css';
//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect, useState} from 'react';



const Home = (props) => {
    /////
    const [ ShowCurrentBook, setCurrentBook] =useState(null)
    const bookStatus = 'Reading'
    const getCurrentBook = async () => {
    
    try {
      const response = await fetch(`http://localhost:5000/current/${bookStatus}`)
      const json = await response.json()
      //console.log(json)
      setCurrentBook(json)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => getCurrentBook, [])

  console.log(ShowCurrentBook)

  const BookofMonth = ShowCurrentBook

    return (
        <div className="HomeBody">
        {BookofMonth?.map((ShowCurrentBook) => <CurrentBook key={ShowCurrentBook.book_id} ShowCurrentBook={ShowCurrentBook}/>)}
        </div> 
    )
}

export default Home;