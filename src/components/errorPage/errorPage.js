import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
    <div>
        <h2>Oops!</h2>
        <Link to="/">Get back to home page!</Link>
    </div>
)

export default ErrorPage;
