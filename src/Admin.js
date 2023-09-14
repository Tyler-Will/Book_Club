import "bootstrap/dist/css/bootstrap.min.css";

const Admin =() => {
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