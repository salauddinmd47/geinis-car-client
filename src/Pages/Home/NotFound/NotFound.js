import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Oops !!! page not found</h1>
            <Link to='/'>
                <button className="btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;