import { Fragment } from "react";
import '../index.css';
const Navbar = () => {
    return (
        <Fragment>
            <div className="header">
            <h1 className="Title">Followers of Anansi</h1>
            </div>
        <nav className="navbarBody">
            <ul className="NavBar">
                <li className="Navbutton"><a  href="/">Home</a></li>
                <li className="Navbutton"><a  href="/Bookshelf">Bookshelf</a></li>
                <li className="Navbutton"><a  href="/Calendar">Updates</a></li>
                <li className="Navbutton"><a href="/Pester">Pester Me</a></li>
                <li className="Navbutton"><a href="/ToDo">To-Do-List</a></li>
                <li className="Navbutton"><a href="/Admin">Admin</a></li>
            </ul>
        </nav>
        </Fragment> 
     );
}
 
export default Navbar;