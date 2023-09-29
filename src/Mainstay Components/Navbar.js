import { Fragment } from "react";
import '../index.css';
const Navbar = () => {
    return (
        <Fragment>
            <div className="header">
            <h1 className="Title">Followers of Anansi</h1>
            </div>
        <nav className="navbar">
            <div className="links">
                <a className="button" href="/">Home</a>
                <a className="button" href="/Bookshelf">Bookshelf</a>
                <a className="button" href="/Calendar">Updates</a>
                <a className="button" href="/Pester">Pester Me</a>
                <a className="button" href="/ToDo">To-Do-List</a>
                <a className="button" href="/Admin">Admin</a>
            </div>
        </nav>
        </Fragment> 
     );
}
 
export default Navbar;