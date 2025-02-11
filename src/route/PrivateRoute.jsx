import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    if (loading) return <LoadingSpinner />
    if (user) return children
    return <Navigate to='/login' />;
};

export default PrivateRoute;