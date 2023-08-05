
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="Title">Followers of Anansi</h1>
            <div className="links">
                <a className="button" href="/">Home</a>
                <a className="button" href="/Bookshelf">Bookshelf</a>
                <a className="button" href="/Calendar">Updates</a>
                <a className="button" href="/Pester">Pester Me</a>
                <a className="button" href="/ToDo">To-Do-List</a>
            </div>
        </nav>
     );
}
 
export default Navbar;