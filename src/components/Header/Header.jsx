import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {" | "}
            <NavLink to="/users">Users</NavLink>
            {" | "}
            <NavLink to="/users/:id">User</NavLink>
            {" | "}
            <NavLink to="/usersslow">UsersSlow</NavLink>
        </nav>
    );
};

export default Header;
