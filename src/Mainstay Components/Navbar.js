const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Followers of Anansi</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Bookshelf">Bookshelf</a>
                <a href="/Calendar">Updates</a>
                <a href="/Pester">Pester Me</a>
                <a href="/ToDo">To-Do-List</a>
            </div>
        </nav>
     );
}
 
export default Navbar;