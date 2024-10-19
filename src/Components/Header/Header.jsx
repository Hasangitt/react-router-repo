import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/comments">Comments</NavLink>
            </nav>
        </div>
    );
};

export default Header;