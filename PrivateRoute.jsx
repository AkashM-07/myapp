import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import { emailSignIn } from "./SignIn";

const PrivateRoute = () => {
    const sessionToken = Cookies.get('sessionToken'); // determine if authorized, from context or however you're doing it
    // emailSignIn = sessionToken;
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return sessionToken=true ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
