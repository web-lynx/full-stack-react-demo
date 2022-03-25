import { logout } from "../utils";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Fauxstagram</h1>
            <input type="text" id="search-box" placeholder="Search" />
            <ul>
                <NavLink to="/home"></NavLink>
                <li>
                    <a href="#">DMs</a>
                </li>
                <li>
                    <a href="#">Explore</a>
                </li>
                <li>
                    <a href="#">Likes</a>
                </li>
                <li>
                    <NavLink to="settings"></NavLink>
                </li>
            </ul>
            <button onClick={() => logout}>Log Out</button>
        </div>
    );
};
