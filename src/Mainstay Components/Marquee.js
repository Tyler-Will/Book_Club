import {useEffect, useState} from 'react';
import MarqueeMessage from './MarqueeMessage';
const Marquee = () => {
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
  
        <div className="MarqueeBody">
        {BookofMonth?.map((ShowCurrentBook) => <MarqueeMessage key={ShowCurrentBook.book_id} ShowCurrentBook={ShowCurrentBook}/>)}
        </div>
    )
}

export default Marquee;