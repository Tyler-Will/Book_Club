import "bootstrap/dist/css/bootstrap.min.css";
//useEffect is needed to prevent fetch request from running more than once. See below.
import {useEffect} from 'react';


const Admin =() => {

    const getBook = async () => {
        const bookStatus = 'Reading'
        try {
          const response = await fetch(`http://localhost:5000/current/${bookStatus}`)
          const json = await response.json()
          console.log(json)
        } catch (error) {
          console.error(error)
        }
      }
    
      useEffect(() => getBook, [])

    return (
        <div>
            <form>
    <h1>Suggest Our Next Book</h1>
    <label for="BookName">Book Title:</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">Book Author</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">Synopsis</label>
    <input type="text" id="BookName"></input><br/>

    <label for="BookName">Page Count</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">Year of Release</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">ISBN</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">Your Name</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">Recommended Reading</label>
    <input type="text" id="BookName" ></input><br/>

    <label for="BookName">Topics for Discussion</label>
    <input type="text" id="BookName" ></input><br/>

    <input type="button" value="Submit for Approval"></input><br/>
            </form>
        </div>
    )
}

export default Admin