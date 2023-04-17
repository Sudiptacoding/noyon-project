import React from 'react';
import { Navigate } from 'react-router-dom';

const Privetrouts = ({ isSignin, children }) => {
    if (!isSignin) {
        return <Navigate to='/contract' replace></Navigate>
    } return children
};

export default Privetrouts;