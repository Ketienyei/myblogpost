import React from 'react';
import {Link} from 'react-router-dom';
const navbar = () => {
    return (
        <nav className="navbar">
            <h2>BlogPost</h2>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">new Blog</a> */}

                <Link to="/">Home</Link>
                <Link to="/create">new Blog</Link>
            </div>
        </nav>
    );
}
 
export default navbar;